import { EtudiantService } from './../../_services/etudiant.service';
import { Etudiant } from './../../_models/etudiant';
import { Promotion } from './../../_models/promotion';
import { Component, OnInit } from '@angular/core';
import { User } from './../../_models/user';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { UserService } from 'src/app/_services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NotifierService } from 'src/app/_services/notifier.service';
import { PromotionService } from 'src/app/_services/promotion.service';


@Component({
  selector: 'app-etudiant-create',
  templateUrl: './etudiant-create.component.html',
  styleUrls: ['./etudiant-create.component.css']
})
export class EtudiantCreateComponent implements OnInit {

  currentUsername!: string;
  currentUserID!: number;
  PromoVal!:number;

  promotions?: Promotion[];
  userToCreate!: User;
  EtuToCreate!:Etudiant;

  CreateForm!:FormGroup;
  submitted = false;
  error='';

  isChecked!:any;
  switchIsStudent = true;

  constructor(
    private formBuilder:FormBuilder,
    private userService:UserService,
    private etudiantService:EtudiantService,
    private promotionService:PromotionService,
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
    this.switchIsStudent = true;
    this.InitdetailsForm();
    this.currentUsername = this.authService.currentUserValue.firstName + " " + this.authService.currentUserValue.lastName;
    this.promotionService.getAll().subscribe(promotions=> {
      this.promotions = promotions;
    });
  }



  details(){
    this.userService.details();
  }

  InitdetailsForm(){
    this.CreateForm = this.formBuilder.group({
      FirstName: [''],
      LastName: [''],
      email: [''],
      password: ['']

    });
  }

  get f() { return this.CreateForm.controls; }

  setAdmin(){
    this.switchIsStudent = true;
  }
  setEtu(){
    this.switchIsStudent = false;
  }
  onSelected(value:string){
    this.PromoVal = parseInt(value);
    console.log(this.PromoVal);

  }

  onSubmit() {

    if(this.switchIsStudent){
      this.userToCreate = new User();
      this.userToCreate.firstName = this.f['FirstName'].value;
      this.userToCreate.lastName = this.f['LastName'].value;
      this.userToCreate.email = this.f['email'].value;
      this.userToCreate.password = this.f['password'].value;
      this.userToCreate.role='ADMIN';
      this.userToCreate.active=true;
      if(this.f['FirstName'].value =='' || this.f['LastName'].value == '' || this.f['email'].value == '' || this.f['password'].value == ''){
        this.notifierService.showError("Touts les champ doivent etre remplis !");
      }else{
        this.userService.save(this.userToCreate).subscribe();
        this.router.navigateByUrl("/users");
      }
    }else{
      this.EtuToCreate = new Etudiant();
      this.EtuToCreate.firstName = this.f['FirstName'].value;
      this.EtuToCreate.lastName = this.f['LastName'].value;
      this.EtuToCreate.email = this.f['email'].value;
      this.EtuToCreate.password = this.f['password'].value;
      this.EtuToCreate.role='ETUDIANT';
      this.EtuToCreate.active=true;
      if(this.f['FirstName'].value == '' || this.f['LastName'].value == '' || this.f['email'].value == '' || this.f['password'].value == ''){
        this.notifierService.showError("Touts les champ doivent etre remplis !");
      }else if(this.PromoVal == null || this.PromoVal === undefined){
        this.notifierService.showError("Une promotion doit etre choisie !");
      }else{
        this.promotionService.findById(this.PromoVal).subscribe(p =>{
          this.EtuToCreate.promotions.push(p);
        });
        this.etudiantService.save(this.EtuToCreate).subscribe();
        this.router.navigateByUrl("/users");
      }
    }
  }

}
