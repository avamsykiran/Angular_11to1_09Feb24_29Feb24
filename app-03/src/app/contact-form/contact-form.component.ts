import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../services/contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  id:FormControl;
  fullName:FormControl;
  mobile:FormControl;
  mailId:FormControl;
  dateOfBirth:FormControl;

  contactForm:FormGroup;

  constructor(private cs:ContactService,private router:Router){

    this.id=new FormControl(null);
    this.fullName=new FormControl("",[Validators.required,Validators.minLength(4),Validators.maxLength(25)]);
    this.mobile=new FormControl("",[Validators.required,Validators.pattern("[1-9][0-9]{9}")]);
    this.mailId=new FormControl("",[Validators.required,Validators.email]);
    this.dateOfBirth=new FormControl("",[Validators.required]);

    this.contactForm = new FormGroup({
      id:this.id,
      fullName:this.fullName,
      mobile:this.mobile,
      mailId:this.mailId,
      dateOfBirth:this.dateOfBirth
    })
  }

  formSubmitted(){
    this.cs.add(this.contactForm.value);
    this.router.navigateByUrl("/contacts");
  }
}
