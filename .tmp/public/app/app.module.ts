import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.componet';

@NgModule({
  declarations: [AppComponent],
  providers: [],
  imports: [BrowserModule],
  bootstrap: [AppComponent],
})
export class AppModule { }
