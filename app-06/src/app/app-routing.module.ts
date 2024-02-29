import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { NoSuchComponent } from './no-such/no-such.component';

const routes: Routes = [
  {path:"",pathMatch:"full",redirectTo:"/contacts"},
  {path:"contacts",component:ContactsListComponent},
  {path:"**",component:NoSuchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
