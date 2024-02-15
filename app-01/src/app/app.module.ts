import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ToggleColorDirective } from './directives/toggle-color.directive';
import { DirectiveDemoComponent } from './directive-demo/directive-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ToggleColorDirective,
    DirectiveDemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
