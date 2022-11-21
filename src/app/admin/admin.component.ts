import { AuthenticationService } from './../_services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  currentUsername : string;

  constructor(
    private authService:AuthenticationService,
    private router: Router,
    private userService:UserService) {

    this.currentUsername = authService.currentUserValue.firstName;

  }

  ngOnInit(): void {
  }

  logout():void{
    this.authService.logout();
    this.router.navigateByUrl("/login");

  }

  details(){
    this.userService.details();
  }

}
