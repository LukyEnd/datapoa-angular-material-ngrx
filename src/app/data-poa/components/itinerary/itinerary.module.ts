import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ItineraryRoutingModule } from './itinerary-routing.module';
import { ItineraryComponent } from './itinerary.component';

@NgModule({
  declarations: [ItineraryComponent],
  imports: [CommonModule, ItineraryRoutingModule],
})
export class ItineraryModule {}
