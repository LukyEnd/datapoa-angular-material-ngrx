import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MiniBusRoutingModule } from './mini-bus-routing.module';
import { MiniBusComponent } from './mini-bus.component';

@NgModule({
  declarations: [MiniBusComponent],
  imports: [CommonModule, MiniBusRoutingModule, SharedModule],
})
export class MiniBusModule {}
