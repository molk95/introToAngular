import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  color :string= "red"
  users= [
    {
      id: 0,
      fullName: "hamma hamma",
      age: 19,
    },
    {
      id: 1,
      fullName: "foulen fouleni",
      age: 29,
    },
    {
      id: 2,
      fullName: "foulen fouleni",
      age: 5,
    }
  ];

show(){
  alert('Hello human')
}
}
