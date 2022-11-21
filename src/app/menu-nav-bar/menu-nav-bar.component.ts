import { UserService } from 'src/app/_services/user.service';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogService } from '../_services/dialog.service';
import { NotifierService } from './../_services/notifier.service';

@Component({
  selector: 'app-menu-nav-bar',
  templateUrl: './menu-nav-bar.component.html',
  styleUrls: ['./menu-nav-bar.component.css']
})
export class MenuNavBarComponent implements OnInit {

  constructor(
    private authService:AuthenticationService,
    private router: Router,
    private userService: UserService,
    private route:ActivatedRoute,
    private notifierService: NotifierService,
    private DialogService: DialogService ) {
  }

  details(){
    this.userService.details();
  }

  detailTarget(id: number){
    this.userService.detailTarget(id);
  }

  logout():void{
    this.authService.logout();
    this.router.navigateByUrl("/login");
  }

  ngOnInit(): void {
  }

}
