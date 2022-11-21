import { UserService } from '../../_services/user.service';
import { VilleService } from 'src/app/_services/ville.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../_models/user';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NotifierService } from 'src/app/_services/notifier.service';
import { Ville } from 'src/app/_models/ville';

@Component({
  selector: 'app-details-ville',
  templateUrl: './details-ville.component.html',
  styleUrls: ['./details-ville.component.css']
})
export class DetailsVilleComponent implements OnInit {

  currentUsername!: string;
  currentVilleID!: number;

  villeToUpdate!: Ville;

  DetailsForm!:FormGroup;
  submitted = false;
  error='';

  constructor(
    private formBuilder:FormBuilder,
    private userService:UserService,
    private villeService:VilleService,
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
    this.villeToUpdate = new Ville();
    this.currentUsername = this.authService.currentUserValue.firstName + " " + this.authService.currentUserValue.lastName;

    this.route.params.subscribe( param =>{ this.currentVilleID = param["id"];});

    this.villeService.findById(this.currentVilleID)
    .subscribe(villeById => {
      this.villeToUpdate = villeById;

      this.DetailsForm = this.formBuilder.group({
        Nom: [this.villeToUpdate.nom],
        Slug: [this.villeToUpdate.slug]

      });
    });
  }

  InitdetailsForm(){
    this.DetailsForm = this.formBuilder.group({
      Nom: [''],
      Slug: ['']
    });
  }

  get f() { return this.DetailsForm.controls; }

  onSubmit() {
    this.submitted = true;

    this.villeToUpdate.nom = this.f['Nom'].value;
    this.villeToUpdate.slug = this.f['Slug'].value;

    this.villeService.update(this.villeToUpdate).subscribe();

    this.router.navigateByUrl("/villes");
  }

}
