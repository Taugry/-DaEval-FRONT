import { first } from 'rxjs';
import { UserService } from './../_services/user.service';
import { Form, FormGroup, FormBuilder } from '@angular/forms';
import { User } from './../_models/user';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogService } from '../_services/dialog.service';
import { NotifierService } from './../_services/notifier.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {


  users?: User[];
  itemsPerPage: number;
  currentPage:number;
  totalItems:number = 0;
  searchExpression:string = '';
  searchForm!: FormGroup;

  constructor(
    private formBuilder:FormBuilder,
    private userService:UserService,
    private authService:AuthenticationService,
    private router: Router,
    private route:ActivatedRoute,
    private notifierService: NotifierService,
    private DialogService: DialogService ) {
    this.itemsPerPage = 5;
    this.currentPage = 1;
  }

  getUsersList(){
    this.userService.countUsers().pipe(first()).subscribe(countDto => {
      this.totalItems = countDto;

      this.userService.getAll(this.currentPage, this.itemsPerPage, '').pipe(first()).subscribe(users=> {
        this.users = users;
      });
    });
  }

  get f() { return this.searchForm.controls; }

  pageChanged(page:number){
    this.currentPage = page;
    this.getUsersList();
  }

  InitdetailsForm(){
    this.searchForm = this.formBuilder.group({
      searchExpression:['']
    });
  }

  ngOnInit(): void {
    this.getUsersList();
    this.InitdetailsForm();
  }

  onSubmit(){
    this.searchExpression = this.f['searchExpression'].value;

    console.log("search expression -> "+this.searchExpression);

    this.userService.countUsersWithSearch(this.searchExpression).pipe(first()).subscribe(countDto => {
      this.totalItems = countDto;
      console.log("total items -> "+this.totalItems);

      if(this.totalItems >= this.itemsPerPage){
        this.userService.getAll(this.currentPage, this.totalItems, this.searchExpression).pipe(first()).subscribe(users=> {
          this.users = users;
          console.log("les users -> ");
          console.log(this.users);

        });
      }else{
        this.userService.getAll(this.currentPage, this.itemsPerPage, this.searchExpression).pipe(first()).subscribe(users=> {
          this.users = users;
          console.log("les users -> ");
          console.log(this.users);

        });
      }
    });
  }

  logout():void{
    this.authService.logout();
    this.router.navigateByUrl("/login");
  }


  details(){
    this.userService.details();
  }

  detailTarget(id: number){
    this.userService.detailTarget(id);
  }

  deleteUser(id: number, name: string){
    this.DialogService.openUserConfirmDialog('Voulez-vous vraiment supprimer '+name+' ?')
    .afterClosed().subscribe(res =>{
      if(res){
        this.userService.delete(id).subscribe(res => {
          this.pageChanged(1);
          this.notifierService.showDeletedOK(name);
        });
      }
    });
  }

  detailNoEdit(u: User){
    this.DialogService.openUserDetailsDialog(u);
  }

  createUser(){
    this.router.navigateByUrl(`users/create-user`);
  }

}
