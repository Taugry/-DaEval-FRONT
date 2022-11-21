import { User } from './../../_models/user';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { UserService } from 'src/app/_services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NotifierService } from 'src/app/_services/notifier.service';


@Component({
  selector: 'app-etdiant-edit',
  templateUrl: './etdiant-edit.component.html',
  styleUrls: ['./etdiant-edit.component.css']
})
export class EtdiantEditComponent implements OnInit {

  currentUsername!: string;
  currentUserID!: number;

  userToUpdate!: User;

  DetailsForm!:FormGroup;
  submitted = false;
  error='';

  constructor(
    private formBuilder:FormBuilder,
    private userService:UserService,
    private authService:AuthenticationService,
    private route:ActivatedRoute,
    private router: Router,
    private notifierService: NotifierService) {
    }

  logout():void{
    this.authService.logout();
    this.router.navigateByUrl("/login");

  }

  ngOnInit(): void {
    this.InitdetailsForm();
    this.currentUsername = this.authService.currentUserValue.firstName + " " + this.authService.currentUserValue.lastName;

    this.route.params.subscribe( param =>{ this.currentUserID = param["id"];});

    this.userService.findById(this.currentUserID)
    .subscribe(userById => {
      this.userToUpdate = userById;

      this.DetailsForm = this.formBuilder.group({
        FirstName: [this.userToUpdate.firstName],
        LastName: [this.userToUpdate.lastName],
        email: [this.userToUpdate.email],
        password: ['']

      });
    });
  }

  details(){
    this.userService.details();
  }

  InitdetailsForm(){
    this.DetailsForm = this.formBuilder.group({
      FirstName: [''],
      LastName: [''],
      email: [''],
      password: ['']

    });
  }

  get f() { return this.DetailsForm.controls; }

  onSubmit() {
    this.submitted = true;


    this.userToUpdate.firstName = this.f['FirstName'].value;
    this.userToUpdate.lastName = this.f['LastName'].value;
    this.userToUpdate.email = this.f['email'].value;
    this.userToUpdate.password = this.f['password'].value;

    this.userService.update(this.userToUpdate)
    .subscribe();

    if(this.currentUserID == this.authService.currentUserValue.id){
      this.authService.currentUserValue.firstName = this.userToUpdate.firstName;
      this.authService.currentUserValue.lastName = this.userToUpdate.lastName;
      this.authService.currentUserValue.email = this.userToUpdate.email;
    }

    this.router.navigateByUrl("/admin");
  }

}
