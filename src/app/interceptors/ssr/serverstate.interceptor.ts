import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { makeStateKey, TransferState } from '@angular/platform-browser';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class ServerStateInterceptor implements HttpInterceptor {
  constructor(private transferState: TransferState) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap((event) => {
        if (event instanceof HttpResponse) {
          const stateKey = req.urlWithParams;
          this.transferState.set(makeStateKey(stateKey), event.body);
        }
      })
    );
  }
}
