import { Component } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent {

  contacts!:Contact[];

  constructor(private cs:ContactService){
    this.refresh();
  }

  refresh(){
    this.contacts = this.cs.getAll();
  }

  del(id:number){
    if(window.confirm("Are you sure of deleting contact#"+id+"?")){
      this.cs.deleteById(id);
      this.refresh();
    }
  }
}
