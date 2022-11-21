import { TitreProService } from './../../_services/titrePro.service';
import { UserService } from '../../_services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../_models/user';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NotifierService } from 'src/app/_services/notifier.service';
import { TitrePro } from 'src/app/_models/titrePro';

@Component({
  selector: 'app-details-tp',
  templateUrl: './details-tp.component.html',
  styleUrls: ['./details-tp.component.css']
})
export class DetailsTPComponent implements OnInit {

  currentUsername!: string;
  currentTPID!: number;

  TPToUpdate!: TitrePro;

  DetailsForm!:FormGroup;
  submitted = false;
  error='';

  constructor(
    private formBuilder:FormBuilder,
    private userService:UserService,
    private TPService:TitreProService,
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
    this.TPToUpdate = new TitrePro();
    this.currentUsername = this.authService.currentUserValue.firstName + " " + this.authService.currentUserValue.lastName;

    this.route.params.subscribe( param =>{ this.currentTPID = param["id"];});

    this.TPService.findById(this.currentTPID)
    .subscribe(TPById => {
      this.TPToUpdate = TPById;

      this.DetailsForm = this.formBuilder.group({
        Titre: [this.TPToUpdate.titre]

      });
    });
  }

  InitdetailsForm(){
    this.DetailsForm = this.formBuilder.group({
      Titre: ['']
    });
  }

  get f() { return this.DetailsForm.controls; }

  onSubmit() {
    this.submitted = true;

    this.TPToUpdate.titre = this.f['Titre'].value;

    this.TPService.update(this.TPToUpdate).subscribe();

    this.router.navigateByUrl("/titresPro");
  }

}
