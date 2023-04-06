import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'bus', pathMatch: 'full' },
  {
    path: 'bus',
    loadChildren: () =>
      import('./data-poa/components/bus-line/bus-line.module').then(
        (m) => m.BusLineModule
      ),
  },
  {
    path: 'itinerary/:id',
    loadChildren: () =>
      import('./data-poa/components/itinerary/itinerary.module').then(
        (m) => m.ItineraryModule
      ),
  },
  {
    path: 'minibus',
    loadChildren: () =>
      import('./data-poa/components/mini-bus/mini-bus.module').then(
        (m) => m.MiniBusModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
