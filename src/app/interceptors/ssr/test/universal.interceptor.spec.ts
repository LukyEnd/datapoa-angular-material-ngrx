import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { REQUEST } from '@nguniversal/express-engine/tokens';
import { Request } from 'express';
import { Observable } from 'rxjs';
import { UniversalInterceptor } from '../universal.interceptor';

describe('UniversalInterceptor', () => {
  let interceptor: UniversalInterceptor;
  let mockRequest: Request;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UniversalInterceptor,
        {
          provide: REQUEST,
          useValue: {
            protocol: 'http',
            get: (key: string) => 'localhost:3000',
          },
        },
      ],
    });

    interceptor = TestBed.inject(UniversalInterceptor);
    mockRequest = TestBed.inject(REQUEST);
  });

  it('should add server URL to request URL when running on server', () => {
    const req = new HttpRequest('GET', '/api/data');
    const handler: HttpHandler = {
      handle: (req: HttpRequest<any>): Observable<HttpEvent<any>> => {
        expect(req.url).toEqual('http://localhost:3000/api/data');
        return new Observable();
      },
    };

    interceptor.intercept(req, handler);
  });
});
