import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login-menu/login-menu.component';
import { LoginAdminComponent } from './login-admin/login-admin.component'
import { LoginSuperAdminComponent } from './login-super-admin/login-super-admin.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginSuperAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
