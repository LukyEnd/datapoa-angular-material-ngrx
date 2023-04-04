import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BusLineComponent } from '../bus-line/bus-line.component';
import { MiniBusComponent } from '../mini-bus/mini-bus.component';
import { ItineraryComponent } from './../itinerary/itinerary.component';
import { CssBaseComponent } from './css-base/css-base.component';
import { ErrorApiComponent } from './errors/error-api/error-api.component';
import { ErrorUrlComponent } from './errors/error-url/error-url.component';

@NgModule({
  declarations: [
    BusLineComponent,
    MiniBusComponent,
    ItineraryComponent,
    ErrorUrlComponent,
    ErrorApiComponent,
    CssBaseComponent,
  ],
  imports: [
    CommonModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    AppRoutingModule,
  ],
  exports: [AppRoutingModule],
  providers: [],
})
export class SharedModule {}
