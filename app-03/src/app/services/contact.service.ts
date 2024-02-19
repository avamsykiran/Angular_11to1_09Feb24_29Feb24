import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contacts:Contact[];
  nextId:number;

  constructor() { 
    this.contacts=[
      {id:1,fullName:"Vamsy Kiran",mobile:"9052224753",mailId:"vamsy@gmail.com",dateOfBirth:new Date("1985-06-11")},
      {id:2,fullName:"Sagar",mobile:"9052224751",mailId:"sagar@gmail.com",dateOfBirth:new Date("1987-04-02")}
    ];
    this.nextId=3;
  }

  getAll():Contact[]{
    return [...this.contacts];
  }

  getById(id:number):Contact|undefined{
    return this.contacts.find(c => c.id===id);
  }

  add(c:Contact):void{
    this.contacts.push({...c,id:this.nextId++});
  }

  update(c:Contact):void{
    let index = this.contacts.findIndex(x => x.id===c.id);
    if(index>-1){
      this.contacts[index]=c;
    }
  }

  deleteById(id:number):void{
    let index = this.contacts.findIndex(c => c.id===id);
    if(index>-1){
      this.contacts.splice(index,1);
    }
  }
}
