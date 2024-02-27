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
  errMsg!:string;

  constructor(private cs:ContactService){
    
  }

  ngOnInit(){
    this.refresh();
  }

  refresh(){
    this.cs.getAll().subscribe({
      next: data => this.contacts = data,
      error: err => {
        console.log(err);
        this.errMsg="Unable to load data! Please try again later!";
      }
    })
  }

  del(id:number){
    if(window.confirm("Are you sure of deleting contact#"+id+"?")){
      this.cs.deleteById(id).subscribe({
        next: () => this.refresh(),
        error: err => {
          console.log(err);
          this.errMsg="Unable to delete data! Please try again later!";
        } 
      })
    }
  }
}
