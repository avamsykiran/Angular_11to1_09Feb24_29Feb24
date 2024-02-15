import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-demo',
  templateUrl: './directive-demo.component.html',
  styleUrls: ['./directive-demo.component.css']
})
export class DirectiveDemoComponent {

  myColor:string;
  friends:string[];
  friend!:string;

  constructor(){
    this.myColor="yellow";
    this.friends=[];
  }

  add(){
    this.friends.push(this.friend);
    this.friend="";
  }

  remove(index:number){
    this.friends.splice(index,1);
  }
}
