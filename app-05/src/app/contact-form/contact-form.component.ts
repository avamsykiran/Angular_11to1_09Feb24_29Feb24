import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ContactService } from '../services/contact.service';
import { ActivatedRoute, Router } from '@angular/router';

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

  isEditing!:boolean;

  errMsg!:string;

  constructor(private cs: ContactService, private router: Router,private activatedRoute:ActivatedRoute) {

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

  ngOnInit(){
    let cid = this.activatedRoute.snapshot.params["cid"];
    if(cid){
      this.isEditing=true;
      this.cs.getById(Number(cid)).subscribe({
        next: c => this.contactForm.reset({...c,dateOfBirth:c!.dateOfBirth.toISOString().substring(0,10)}),
        error: err => {
          console.log(err);
          this.errMsg="Unable to laod record to be edited! Please try again later!";
        }
      })
    }
  }

  formSubmitted() {
    let c = {...this.contactForm.value,dateOfBirth: new Date(this.contactForm.value.dateOfBirth)};

    let ob=null;

    if(this.isEditing){
      ob = this.cs.update(c);
    }else{
      ob = this.cs.add(c);
    }

    ob.subscribe({
      next: c => this.router.navigateByUrl("/contacts"),
      error: err => {
        console.log(err);
        this.errMsg="Unable to save the record! Please try again later!";
      }
    });
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
