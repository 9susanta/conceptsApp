import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppdatabindingModule } from './appdatabinding/appdatabinding.module';
import { AppparentchildModule } from "./appparentchild/appparentchild.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppdatabindingModule,
    AppparentchildModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
