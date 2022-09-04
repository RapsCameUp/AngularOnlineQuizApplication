import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user:User = new User();

  constructor( private route:Router, private service: AuthenticationService) { }

  ngOnInit(): void {
  }

  Register(){
    this.service.Register(this.user).subscribe(result => {
      console.log("Successful");
      this.route.navigate(['/login']);
    }, (error) =>{console.log(console.error);})
  }
}
