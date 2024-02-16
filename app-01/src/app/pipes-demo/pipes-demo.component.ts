import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes-demo',
  templateUrl: './pipes-demo.component.html',
  styleUrls: ['./pipes-demo.component.css']
})
export class PipesDemoComponent {

  n:number;
  s:string;
  d:Date;

  constructor(){
    this.n=45.106;
    this.s="hello All ! How Are you?";
    this.d=new Date("1947-08-15T19:00:00");
  }
}
