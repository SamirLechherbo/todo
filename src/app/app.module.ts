import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RamuComponent } from './ramu/ramu.component';
import { SamirComponent } from './samir/samir.component';

@NgModule({
  declarations: [
    AppComponent,
    RamuComponent,
    SamirComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
