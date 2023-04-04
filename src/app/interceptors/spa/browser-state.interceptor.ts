import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { makeStateKey, TransferState } from "@angular/platform-browser";
import { Observable, of } from "rxjs";

@Injectable()
export class BrowserStateInterceptor implements HttpInterceptor {
  constructor(private transferState: TransferState) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const stateKey = makeStateKey(req.urlWithParams);

    if (req.method !== "GET") {
      return next.handle(req);
    }

    const storedResponse: string | null = this.transferState.get(
      makeStateKey(stateKey),
      null
    );
    this.transferState.remove(stateKey);

    if (storedResponse) {
      const response = new HttpResponse({
        body: storedResponse,
        headers: req.headers,
        status: 200,
      });
      return of(response);
    }

    return next.handle(req);
  }
}
