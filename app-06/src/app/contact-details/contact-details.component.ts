import { Component, Input } from '@angular/core';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent {

  @Input()
  contact!:Contact;

  @Input()
  del!:(id:number) => void;
  
  @Input()
  edit!:(id:number) => void;
}
