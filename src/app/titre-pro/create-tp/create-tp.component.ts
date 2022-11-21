import { TitrePro } from './../../_models/titrePro';
import { TitreProService } from './../../_services/titrePro.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NotifierService } from 'src/app/_services/notifier.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-create-tp',
  templateUrl: './create-tp.component.html',
  styleUrls: ['./create-tp.component.css']
})
export class CreateTPComponent implements OnInit {

  currentUsername!: string;
  currentUserID!: number;

  TitreProToCreate!: TitrePro;

  CreateForm!:FormGroup;
  submitted = false;
  error='';

  constructor(
    private formBuilder:FormBuilder,
    private TPService:TitreProService,
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
      Titre: ['']
    });
  }

  get f() { return this.CreateForm.controls; }

  onSubmit() {
    this.TitreProToCreate = new TitrePro();
    this.TitreProToCreate.titre = this.f['Titre'].value;

    if(this.f['Titre'].value == ''){
      this.notifierService.showError("Touts les champ doivent etre remplis !");
    }

    this.TPService.save(this.TitreProToCreate).subscribe();
    this.router.navigateByUrl("/titresPro");
  }

}
