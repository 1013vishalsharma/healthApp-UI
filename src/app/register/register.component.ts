import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  firstName: string;
  lastName: string;
  weight: number;
  height: number;
  gender: string;
  username: string;
  email: string;
  password: string;
  age: number;
  image: string;

  constructor() { }

  ngOnInit() {
  }

  register(){
    if(this.firstName === '' || this.firstName == undefined){

    }
    if(this.lastName === '' || this.lastName == undefined){
      
    }
    if(this.username === '' || this.username == undefined){
      
    }
    if(this.email === '' || this.email == undefined){
      
    }
    if(this.password === '' || this.password == undefined){
      
    }
    
  }

}
