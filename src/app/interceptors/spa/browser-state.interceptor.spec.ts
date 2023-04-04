import { HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import { BrowserStateInterceptor } from './browser-state.interceptor';

describe('BrowserStateInterceptor', () => {
  let interceptor: BrowserStateInterceptor;
  let transferStateSpy: jasmine.SpyObj<TransferState>;
  let httpHandlerSpy: jasmine.SpyObj<HttpHandler>;

  beforeEach(() => {
    transferStateSpy = jasmine.createSpyObj('TransferState', ['get', 'remove']);
    httpHandlerSpy = jasmine.createSpyObj('HttpHandler', ['handle']);
    interceptor = new BrowserStateInterceptor(transferStateSpy);
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });

  it('should not intercept non-GET requests', () => {
    const req = new HttpRequest('POST', '/api/data', { data: 'some data' });
    interceptor.intercept(req, httpHandlerSpy);
    expect(httpHandlerSpy.handle).toHaveBeenCalledWith(req);
  });

  it('should return cached response for GET requests', () => {
    const req = new HttpRequest('GET', '/data');
    const stateKey = makeStateKey(req.urlWithParams);
    const storedResponse = 'cached response';
    transferStateSpy.get.and.returnValue(storedResponse);

    const expectedResponse = new HttpResponse({
      body: storedResponse,
      headers: req.headers,
      status: 200,
    });

    interceptor.intercept(req, httpHandlerSpy).subscribe((response) => {
      expect(response).toEqual(expectedResponse);
      expect(transferStateSpy.remove).toHaveBeenCalledWith(stateKey);
      expect(httpHandlerSpy.handle).not.toHaveBeenCalled();
    });
  });

  it('should not return cached response if there is no cached response', () => {
    const req = new HttpRequest('GET', '/data');
    const stateKey = makeStateKey(req.urlWithParams);
    transferStateSpy.get.and.returnValue(null);

    interceptor.intercept(req, httpHandlerSpy);
    expect(httpHandlerSpy.handle).toHaveBeenCalledWith(req);
    expect(transferStateSpy.remove).toHaveBeenCalledWith(stateKey);
  });
});
