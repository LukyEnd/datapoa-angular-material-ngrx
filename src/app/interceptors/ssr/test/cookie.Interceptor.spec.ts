import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { REQUEST } from '@nguniversal/express-engine/tokens';
import { Observable } from 'rxjs';
import { CookieInterceptor } from '../cookie.Interceptor';

describe('CookieInterceptor', () => {
  let interceptor: CookieInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CookieInterceptor,
        {
          provide: REQUEST,
          useValue: {
            headers: {
              cookie: 'authToken=12345',
            },
          },
        },
      ],
    });

    interceptor = TestBed.inject(CookieInterceptor);
  });

  it('should add cookie to request headers', () => {
    const req = new HttpRequest('GET', '/api/data');
    const handler: HttpHandler = {
      handle: (req: HttpRequest<any>): Observable<HttpEvent<any>> => {
        expect(req.headers.get('Cookie')).toEqual('authToken=12345');
        return new Observable();
      },
    };

    interceptor.intercept(req, handler);
  });
});
