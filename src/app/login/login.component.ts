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
  showErrorMessage: boolean;
  errorMsg: string;

  constructor(public loginService: LoginService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() { }

  login() {
    console.log(this.email);
    console.log(this.password);
    if (this.email === '' || this.email == undefined) {
      this.showErrorMessage = true;
      this.errorMsg = 'Username or password incorrect';
    }
    else if (this.password === '' || this.password == undefined) {
      this.showErrorMessage = true;
      this.errorMsg = 'Username or password incorrect';
    }
    else {
      this.loginService.login(new Login(this.email, this.password))
        .subscribe((data: {}) => {
          console.log(data);
          this.setSession(data);
        });
      this.router.navigate(['/MyDashboard']);
    }
  }


  private setSession(authToken) {
    console.log(authToken.token);
    localStorage.setItem('jwtToken', authToken.token);
  }

  logout() {
    localStorage.removeItem('jwtToken');
  }
}