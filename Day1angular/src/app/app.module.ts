import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserHomePageComponent } from './user-home-page/user-home-page.component';
import { UserRegisterComponent } from './user-register/user-register.component';
@NgModule({
  declarations: [
    AppComponent,
    UserHomePageComponent,
    UserRegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
