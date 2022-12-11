import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-my-component',
  //Internal template
  template:`<h1>{{name1}}</h1>
              <body>
              Hey Siri,How to know more about the angular and Typescript 
             </body>
             `,
  //External Template/
 // templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit{
  
  name1="Welcome to skillsoft platform";

  contructor() { }
  ngOnInit():  void{

  }

}