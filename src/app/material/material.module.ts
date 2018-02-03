import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatCardModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatProgressSpinnerModule,
  MatToolbarModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatDialogModule
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatDialogModule
  ],
  declarations: []
})
export class MaterialModule { }
