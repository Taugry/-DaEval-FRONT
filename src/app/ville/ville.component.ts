import { VilleService } from './../_services/ville.service';
import { Form, FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogService } from '../_services/dialog.service';
import { NotifierService } from './../_services/notifier.service';
import { Ville } from '../_models/ville';

@Component({
  selector: 'app-ville',
  templateUrl: './ville.component.html',
  styleUrls: ['./ville.component.css']
})
export class VilleComponent implements OnInit {

  villes?:Ville[];
  itemsPerPage: number;
  currentPage:number;
  totalItems:number = 0;
  searchExpression:string = '';
  searchForm!: FormGroup;

  constructor(
    private formBuilder:FormBuilder,
    private villeService:VilleService,
    private authService:AuthenticationService,
    private router: Router,
    private route:ActivatedRoute,
    private notifierService: NotifierService,
    private DialogService: DialogService ) {
      this.itemsPerPage = 5;
      this.currentPage = 1;
  }
  ngOnInit(): void {
    this.getVilleList();
    this.InitdetailsForm();
  }
  getVilleList(){
    this.villeService.countVille().subscribe(countDto => {
      this.totalItems = countDto;

      this.villeService.getAllPages(this.currentPage, this.itemsPerPage, '').subscribe(villes=> {
        this.villes=villes;
        console.log(this.villes);

      });
    });
  }
  get f() { return this.searchForm.controls; }
  pageChanged(page:number){
    this.currentPage = page;
    this.getVilleList();
  }

  InitdetailsForm(){
    this.searchForm = this.formBuilder.group({
      searchExpression:['']
    });
  }

  onSubmit(){
    this.searchExpression = this.f['searchExpression'].value;

    this.villeService.countVilleWithSearch(this.searchExpression).subscribe(countDto => {
      this.totalItems = countDto;

      if(this.totalItems >= this.itemsPerPage){
        this.villeService.getAllPages(this.currentPage, this.totalItems, this.searchExpression).subscribe(villes=> {
          this.villes = villes;

        });
      }else{
        this.villeService.getAllPages(this.currentPage, this.itemsPerPage, this.searchExpression).subscribe(villes=> {
          this.villes = villes;

        });
      }
    });
  }

  createVille(){
    this.router.navigateByUrl(`villes/create-ville`);
  }

  viewVilleDetails(ville:Ville){
    this.DialogService.openVilleDetailsDialog(ville);
  }

  detailsVille(villeID:number){
    this.router.navigateByUrl(`/villes/${villeID}/edit-ville`);
  }

  deleteVille(villeID:number, villeNom:string){
    this.DialogService.openVilleConfirmDialog('Voulez-vous vraiment supprimer '+villeNom+' ?')
    .afterClosed().subscribe(res =>{
      if(res){
        this.villeService.delete(villeID).subscribe(res => {
          this.pageChanged(1);
          this.notifierService.showDeletedOK(villeNom);
        });
      }
    });
  }


}
