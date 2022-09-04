import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Email = '';
  password = '';
  _users: Array<User> = [];
  _invalid = false;

  constructor(private route:Router, private auth_service: AuthenticationService) { }

  ngOnInit(): void {  
  }

  Login(){
    this.auth_service.getUsers().subscribe(result => {
    this._users = result;

    var searchUser = result.find(x => x.Email === this.Email && x.password === this.password);
    if(searchUser != null){
        sessionStorage.setItem('loggedin', this.Email);
        this.route.navigate(['/main']);
        this._invalid = false;
    }
    else{
      this._invalid = true;
      console.log("Login Failure.");
   }

  },(error) => {console.log(error);});
}

}
