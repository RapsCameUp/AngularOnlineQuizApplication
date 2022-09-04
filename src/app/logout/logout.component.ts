import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private route:Router, private serv: AuthenticationService) { }

  ngOnInit(): void {
     this.serv.LogOut;
    this.route.navigate(['login']);
  }

}
