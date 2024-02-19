import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  userName:string;

  banners:string[];
  bIndex:number;
  bWidth:number;

  bFlag!:boolean;
  cFlag!:boolean;

  constructor(){
    this.userName="Somebody";
    this.bIndex=0;
    this.banners=[
      "assets/imgs/n1.png",
      "assets/imgs/n2.jpg",
      "assets/imgs/n3.jpg",
      "assets/imgs/n4.jpg"
    ];
    this.bWidth=200;
  }

  toggleImg(){
    this.bIndex++;
    if(this.bIndex===this.banners.length){
      this.bIndex=0;
    }
  }

}
