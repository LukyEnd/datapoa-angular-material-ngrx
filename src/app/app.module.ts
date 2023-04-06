import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { AppComponent } from './app.component';
import { HeaderComponent } from './data-poa/components/shared/header/header.component';
import { BusItineraryEffects } from './store/effects/bus-itinerary.effects';
import { BusLineEffects } from './store/effects/bus-line.effects';
import { MiniBusEffects } from './store/effects/mini-bus.effects';
import { reducers } from './store/reducers/root.reducers';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule,
    EffectsModule.forRoot([
      BusLineEffects,
      MiniBusEffects,
      BusItineraryEffects,
    ]),
    StoreModule.forRoot(reducers, {}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
