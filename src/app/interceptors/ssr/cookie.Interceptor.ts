import {REQUEST} from "@nguniversal/express-engine/tokens";
import {Inject, Injectable, Optional} from "@angular/core";
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class CookieInterceptor implements HttpInterceptor {
  constructor(@Optional() @Inject(REQUEST) private httpRequest: any) {
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this.httpRequest) {
      if (this.httpRequest.headers.cookie) {
        req = req.clone({
          setHeaders: {
            Cookie: this.httpRequest.headers.cookie,
          },
        });
      }
    }
    return next.handle(req);
  }
}
