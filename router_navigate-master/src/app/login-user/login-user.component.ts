import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-super-admin',
  templateUrl: './login-super-admin.component.html',
  styleUrls: ['./login-super-admin.component.css']
})
export class LoginUserComponent implements OnInit {

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
      alert(12);
      if(this.username === this.user_username) {
          alert(1);
         this.router.navigate(['login-menu'])
      }


  }
}