import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child-comp',
  standalone: false,
  templateUrl: './child-comp.component.html',
  styleUrl: './child-comp.component.css'
})
export class ChildCompComponent {
  @Input('Name') Name:string="";
  @Output() OutputName=new EventEmitter<string>();
  onBtnClick(val:string)
  {
    this.OutputName.emit(val);
  }
}
