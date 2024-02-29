import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ContactService } from '../services/contact.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  id: FormControl;
  fullName: FormControl;
  mobile: FormControl;
  mailId: FormControl;
  dateOfBirth: FormControl;
  group:FormControl;

  contactForm: FormGroup;

  @Input()
  save!:(c:Contact) => void;

  @Input()
  contact!:Contact;

  @Input()
  cancelEdit!:(id:number) => void;

  constructor() {

    this.id = new FormControl(null);
    this.fullName = new FormControl("", [Validators.required, Validators.minLength(4), Validators.maxLength(25)]);
    this.mobile = new FormControl("", [Validators.required, Validators.pattern("[1-9][0-9]{9}")]);
    this.mailId = new FormControl("", [Validators.required, Validators.email]);
    this.dateOfBirth = new FormControl("", [Validators.required,this.ageValidator(21)]);
    this.group = new FormControl("", [Validators.required]);

    this.contactForm = new FormGroup({
      id: this.id,
      fullName: this.fullName,
      mobile: this.mobile,
      mailId: this.mailId,
      dateOfBirth: this.dateOfBirth,
      group:this.group
    })
  }

  ngOnChanges(){
    if(this.contact){
      this.contactForm.reset({...this.contact,dateOfBirth:this.contact.dateOfBirth.toISOString().substring(0,10)});
    }
  }

  formSubmitted() {
    let c = {...this.contactForm.value,dateOfBirth: new Date(this.contactForm.value.dateOfBirth)};
    this.save(c);
    this.contactForm.reset({id: null,fullName: null,mobile: null,mailId: null,dateOfBirth: null,group:""})
  }

  cancel(){
    this.contact ?
      this.cancelEdit(this.contact.id) :
      this.contactForm.reset({id: null,fullName: null,mobile: null,mailId: null,dateOfBirth: null,group:""})
  }

  ageValidator(ageLimit:number) : ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      let isValid: boolean = false;
  
      if (control && control.value) {
        let dob = new Date(control.value);
        let today = new Date();
        let diffInMillSec = today.getTime() - dob.getTime();
        const oneYearInMilliSec = (1000 * 60 * 60 * 24 * 365);
        let diffInYrs = diffInMillSec / oneYearInMilliSec;
        isValid = diffInYrs >= ageLimit;
      }
  
      return isValid ? null : { "age": true };
    }
  }
}
