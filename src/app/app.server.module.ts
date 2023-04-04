import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { BrowserStateInterceptor } from './interceptors/spa/browser-state.interceptor';
import { CookieInterceptor } from './interceptors/ssr/cookie.Interceptor';
import { ServerStateInterceptor } from './interceptors/ssr/serverstate.interceptor';
import { UniversalInterceptor } from './interceptors/ssr/universal.interceptor';

@NgModule({
  imports: [AppModule, ServerModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: CookieInterceptor, multi: true },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BrowserStateInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ServerStateInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UniversalInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
