import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Login } from './login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  products:any = [];

  constructor(public loginService:LoginService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  login(){
    console.log(this.email);
    console.log(this.password);
    this.loginService.login(new Login(this.email, this.password))
    .subscribe((data: {}) => {
      console.log(data);
      this.setSession(data);
    });
    this.router.navigate(['/dashboard']);
  }


  private setSession(authToken){
    console.log(authToken.token);
    localStorage.setItem('jwtToken', authToken.token);
  }

  logout(){
    localStorage.removeItem('jwtToken');
  }
}