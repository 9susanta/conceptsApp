import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChildCompComponent } from '../child-comp/child-comp.component';

@Component({
  selector: 'app-parent-comp',
  standalone: false,
  templateUrl: './parent-comp.component.html',
  styleUrl: './parent-comp.component.css'
})
export class ParentCompComponent implements OnInit {
  
  @ViewChild('txtnumber',{static:true}) child!:ElementRef 

  ngOnInit(): void {
    console.log(this.child);
  }

  OnOutputReciver(val:string)
  {
    this.txtNumberValue=val;
  }
  txtNumberValue:string="";
  OnChange(val:string)
  {
    this.txtNumberValue=val;
  }
}
