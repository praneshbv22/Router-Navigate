import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

  username = ''
  password = ''
  invalidLogin = false
  user_username = 'demo@gmail.com';
  user_password = 'demo';

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