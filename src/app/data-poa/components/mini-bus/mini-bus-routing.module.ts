import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MiniBusComponent } from './mini-bus.component';

const routes: Routes = [
  { path: '', component: MiniBusComponent },
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
export class MiniBusRoutingModule {}
