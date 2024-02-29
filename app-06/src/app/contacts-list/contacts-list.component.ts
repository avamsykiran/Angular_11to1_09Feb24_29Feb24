import { Component } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent {

  contacts!: Contact[];
  errMsg!: string;
  editables: number[];

  constructor(private cs: ContactService) {
    this.editables = [];
  }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.cs.getAll().subscribe({
      next: data => this.contacts = data,
      error: err => {
        console.log(err);
        this.errMsg = "Unable to load data! Please try again later!";
      }
    })
  }

  del = (id: number) => {
    if (window.confirm("Are you sure of deleting contact#" + id + "?")) {
      this.cs.deleteById(id).subscribe({
        next: () => this.refresh(),
        error: err => {
          console.log(err);
          this.errMsg = "Unable to delete data! Please try again later!";
        }
      })
    }
  }

  add = (c: Contact) => {
    this.cs.add(c).subscribe({
      next: () => this.refresh(),
      error: err => {
        console.log(err);
        this.errMsg = "Unable to add the record! Please try again later!";
      }
    })
  }

  update = (c: Contact) => {
    this.cs.update(c).subscribe({
      next: c => { this.unMarkEditable(c.id); this.refresh(); },
      error: err => {
        console.log(err);
        this.errMsg = "Unable to update the record! Please try again later!";
      }
    })
  }

  markEditable = (id: number) => this.editables.push(id);

  unMarkEditable = (id: number) => {
    let index = this.editables.findIndex(x => x === id);
    this.editables.splice(index, 1);
  }

  isEditable = (id: number) => this.editables.findIndex(x => x === id) > -1;
}