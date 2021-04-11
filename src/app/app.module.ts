import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { InvestmentFormsComponent } from './investment-forms/investment-forms.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, InvestmentFormsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
