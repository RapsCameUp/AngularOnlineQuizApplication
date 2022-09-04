import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  Email = '';

  constructor(private route:Router, private serv: AuthenticationService) { }
  
  ngOnInit(): void {
    this.Email = this.serv.getUser();
  }
}
