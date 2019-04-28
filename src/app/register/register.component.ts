import { Component, OnInit } from '@angular/core';
import { Register, IRegister } from './register';
import { RegisterService } from './register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // firstName: string;
  // lastName: string;
  // weight: number;
  // height: number;
  // gender: string;
  // username: string;
  // email: string;
  // password: string;
  // age: number;
  // image: string;

  register: Register = {
    firstname: null,
    lastname: null,
    weight: null,
    height: null,
    gender: null,
    username: null,
    email: null,
    password: null,
    age: null,
    image: null
  };

  constructor(public registerService: RegisterService, private router: Router) { }

  ngOnInit() {

  }

  signUp(register) {
    console.log(this.register);
    this.registerService.signUp(this.register)
    .subscribe((data: {}) => {
      console.log(data);
    });
  this.router.navigate(['/dashboard']);
  }

}
