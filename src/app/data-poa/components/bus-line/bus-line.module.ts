import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BusLineRoutingModule } from './bus-line-routing.module';
import { BusLineComponent } from './bus-line.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [BusLineComponent],
  imports: [CommonModule, BusLineRoutingModule, SharedModule],
})
export class BusLineModule {}
