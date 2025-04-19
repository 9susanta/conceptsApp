import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataBindComponent } from './data-bind/data-bind.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DataBindComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[DataBindComponent]
})
export class AppdatabindingModule { }
