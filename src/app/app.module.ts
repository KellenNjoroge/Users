import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserFormComponent } from './user-form/user-form.component';




@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserDetailsComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
