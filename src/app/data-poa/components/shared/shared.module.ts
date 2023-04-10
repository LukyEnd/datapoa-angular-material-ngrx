import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { CssBaseComponent } from './css-base/css-base.component';
import { ErrorApiComponent } from './errors/error-api/error-api.component';
import { ErrorUrlComponent } from './errors/error-url/error-url.component';

@NgModule({
  declarations: [ErrorUrlComponent, ErrorApiComponent, CssBaseComponent],
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
  ],
  exports: [
    ErrorUrlComponent,
    ErrorApiComponent,
    CssBaseComponent,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
  ],
  providers: [],
})
export class SharedModule {}
