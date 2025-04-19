import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentCompComponent } from './parent-comp/parent-comp.component';
import { ChildCompComponent } from './child-comp/child-comp.component';

@NgModule({
  declarations: [
    ParentCompComponent,
    ChildCompComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ParentCompComponent
  ]

})
export class AppparentchildModule { }
