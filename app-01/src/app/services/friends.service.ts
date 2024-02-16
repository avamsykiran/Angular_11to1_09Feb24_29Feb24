import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FriendsService {

  friends:string[];

  constructor() { 
    this.friends=[];
  }
  
  getAll():string[]{
    return [...this.friends];
  }

  add(friend:string):string[]{
    this.friends.push(friend);
    return [...this.friends];
  }

  remove(index:number):string[]{
    this.friends.splice(index,1);
    return [...this.friends];
  }
}
