import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent} from './login-menu/login-menu.component';
import { LoginAdminComponent} from './login-admin/login-admin.component';
import { LoginSuperAdminComponent } from './login-super-admin/login-super-admin.component'
import { LoginUserComponent } from './login-user/login-user.component';
const routes: Routes = [

    { path: 'login-menu', component: LoginComponent },
    { path: 'login-user', component: LoginUserComponent },
    { path: 'login-admin', component: LoginAdminComponent },
    { path: 'login-super-admin', component: LoginSuperAdminComponent },
    { path: '', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
