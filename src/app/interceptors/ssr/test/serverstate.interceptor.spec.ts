import { TestScheduler } from 'rxjs/testing';

import {
  HttpRequest,
  HttpEvent,
  HttpHandler,
  HttpResponse,
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { TransferState } from '@angular/platform-browser';
import { ServerStateInterceptor } from '../serverstate.interceptor';

describe('ServerStateInterceptor', () => {
  let interceptor: ServerStateInterceptor;
  let transferState: TransferState;
  let httpHandler: HttpHandler;

  beforeEach(() => {
    transferState = jasmine.createSpyObj('TransferState', ['set']);
    httpHandler = {
      handle: (req: HttpRequest<any>): Observable<HttpEvent<any>> => {
        const body = { data: 'Hello world' };
        const response = new HttpResponse({ body });
        return of(response);
      },
    };
    interceptor = new ServerStateInterceptor(transferState);
  });

  it('should set state in transfer state', () => {
    const req = new HttpRequest('GET', '/api/data');
    interceptor.intercept(req, httpHandler).subscribe();
    const stateKey = 'GET/api/data';
    const responseBody = { data: 'Hello world' };
    expect(transferState.set).toHaveBeenCalledWith(
      jasmine.any(String),
      responseBody
    );
  });
});
