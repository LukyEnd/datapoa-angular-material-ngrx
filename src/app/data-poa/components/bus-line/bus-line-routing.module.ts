import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusLineComponent } from './bus-line.component';

const routes: Routes = [
  { path: '', component: BusLineComponent },
  {
    path: 'itinerary/:id',
    loadChildren: () =>
      import('../../components/itinerary/itinerary.module').then(
        (m) => m.ItineraryModule
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
export class BusLineRoutingModule {}
