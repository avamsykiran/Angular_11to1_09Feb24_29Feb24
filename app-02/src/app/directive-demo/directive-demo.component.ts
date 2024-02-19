import { Component } from '@angular/core';
import { FriendsService } from '../services/friends.service';

@Component({
  selector: 'app-directive-demo',
  templateUrl: './directive-demo.component.html',
  styleUrls: ['./directive-demo.component.css']
})
export class DirectiveDemoComponent {

  myColor:string;
  friends:string[];
  friend!:string;

  constructor(private fs:FriendsService){
    this.myColor="yellow";
    this.friends=fs.getAll();
  }

  add(){
    this.friends=this.fs.add(this.friend);
    this.friend="";
  }

  remove(index:number){
    this.friends=this.fs.remove(index);
  }
}
