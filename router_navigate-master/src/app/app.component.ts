import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angularapp';

  username = ''
  password = ''
  invalidLogin = false
  user_username = 'demo@gmail.com';
  user_password = 'demo';
  superadmin_username = 'democollege@gmail.com';
  superadmin_password = 'democollege';

  constructor(private router:Router) { }

  ngOnInit() {
  }

  checkLogin() {
    if((this.username === this.user_username) && (this.password === this.user_password))  {
        alert(1);
       this.router.navigate(['login-admin']);
    } else if((this.username === this.superadmin_username) && (this.password === this.superadmin_password) ) {
      this.router.navigate(['login-super-admin']);
    } else {
      this.router.navigate(['login-menu']);
    }


}
}
