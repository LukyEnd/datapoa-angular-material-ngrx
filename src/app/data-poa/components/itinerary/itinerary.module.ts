import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ItineraryRoutingModule } from './itinerary-routing.module';
import { ItineraryComponent } from './itinerary.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ItineraryComponent],
  imports: [CommonModule, ItineraryRoutingModule, SharedModule],
})
export class ItineraryModule {}
