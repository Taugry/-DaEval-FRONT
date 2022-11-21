import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NotifierService } from 'src/app/_services/notifier.service';
import { Ville } from 'src/app/_models/ville';
import { VilleService } from 'src/app/_services/ville.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-create-ville',
  templateUrl: './create-ville.component.html',
  styleUrls: ['./create-ville.component.css']
})
export class CreateVilleComponent implements OnInit {

  currentUsername!: string;
  currentUserID!: number;

  villeToCreate!: Ville;

  CreateForm!:FormGroup;
  submitted = false;
  error='';

  constructor(
    private formBuilder:FormBuilder,
    private villeService:VilleService,
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

  details(){
    this.userService.details();
  }

  ngOnInit(): void {
    this.InitdetailsForm();
    this.currentUsername = this.authService.currentUserValue.firstName + " " + this.authService.currentUserValue.lastName;
  }

  InitdetailsForm(){
    this.CreateForm = this.formBuilder.group({
      Nom: [''],
      Slug: ['']
    });
  }

  get f() { return this.CreateForm.controls; }

  onSubmit() {
    this.villeToCreate = new Ville();
    this.villeToCreate.nom = this.f['Nom'].value;
    this.villeToCreate.slug = this.f['Slug'].value;

    if(this.f['Nom'].value == '' || this.f['Slug'].value == ''){
      this.notifierService.showError("Touts les champ doivent etre remplis !");
    }

    this.villeService.save(this.villeToCreate).subscribe();
    this.router.navigateByUrl("/villes");
  }

}
