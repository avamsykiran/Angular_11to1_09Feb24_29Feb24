import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ToggleColorDirective } from './directives/toggle-color.directive';
import { DirectiveDemoComponent } from './directive-demo/directive-demo.component';
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';
import { InToWordsPipe } from './pipes/in-to-words.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ToggleColorDirective,
    DirectiveDemoComponent,
    PipesDemoComponent,
    InToWordsPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
