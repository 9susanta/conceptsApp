import { Component } from '@angular/core';

@Component({
  selector: 'app-data-bind',
  standalone: false,
  templateUrl: './data-bind.component.html',
  styleUrl: './data-bind.component.css'
})
export class DataBindComponent {
     UserName:string="Susanta";
     onUserClick()
     {
       this.UserName="Susanta : Button Clicked"
     }
}
