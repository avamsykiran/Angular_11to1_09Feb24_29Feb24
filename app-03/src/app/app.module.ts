import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { NoSuchComponent } from './no-such/no-such.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactsListComponent,
    ContactFormComponent,
    NoSuchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
