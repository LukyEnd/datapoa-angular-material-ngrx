import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import {Inject, Injectable, Optional} from "@angular/core";
import {REQUEST} from "@nguniversal/express-engine/tokens";
import {Request} from "express";
import {Observable} from "rxjs";

@Injectable()
export class UniversalInterceptor implements HttpInterceptor {
  constructor(@Optional() @Inject(REQUEST) protected request: Request) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let serverReq: HttpRequest<any> = req;

    if (this.request) {
      let newUrl = `${this.request.protocol}://${this.request.get("host")}`;
      if (!req.url.startsWith("/")) {
        newUrl += "/";
      }
      newUrl += req.url;
      serverReq = req.clone({url: newUrl, headers: req.headers});
    }
    return next.handle(serverReq);
  }
}
