import { TitrePro } from './../_models/titrePro';
import { TitreProService } from './../_services/titrePro.service';
import { Form, FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogService } from '../_services/dialog.service';
import { NotifierService } from './../_services/notifier.service';

@Component({
  selector: 'app-titre-pro',
  templateUrl: './titre-pro.component.html',
  styleUrls: ['./titre-pro.component.css']
})
export class TitreProComponent implements OnInit {

  titrepros?:TitrePro[];
  itemsPerPage: number;
  currentPage:number;
  totalItems:number = 0;
  searchExpression:string = '';
  searchForm!: FormGroup;

  constructor(
    private formBuilder:FormBuilder,
    private titreproService:TitreProService,
    private authService:AuthenticationService,
    private router: Router,
    private route:ActivatedRoute,
    private notifierService: NotifierService,
    private DialogService: DialogService ) {
      this.itemsPerPage = 5;
      this.currentPage = 1;
  }

  ngOnInit(): void {
    this.getTitreProList();
    this.InitdetailsForm();
  }
  getTitreProList(){
    this.titreproService.countTitrePro().subscribe(countDto => {
      this.totalItems = countDto;

      this.titreproService.getAllPages(this.currentPage, this.itemsPerPage, '').subscribe(tps=> {
        this.titrepros=tps;

      });
    });
  }
  get f() { return this.searchForm.controls; }
  pageChanged(page:number){
    this.currentPage = page;
    this.getTitreProList();
  }

  InitdetailsForm(){
    this.searchForm = this.formBuilder.group({
      searchExpression:['']
    });
  }

  onSubmit(){
    this.searchExpression = this.f['searchExpression'].value;

    this.titreproService.countTitreProWithSearch(this.searchExpression).subscribe(countDto => {
      this.totalItems = countDto;

      if(this.totalItems >= this.itemsPerPage){
        this.titreproService.getAllPages(this.currentPage, this.totalItems, this.searchExpression).subscribe(villes=> {
          this.titrepros = villes;

        });
      }else{
        this.titreproService.getAllPages(this.currentPage, this.itemsPerPage, this.searchExpression).subscribe(villes=> {
          this.titrepros = villes;

        });
      }
    });
  }

  createTirePro(){
    this.router.navigateByUrl(`titresPro/create-TP`);
  }

  viewTireProDetails(tp:TitrePro){
    this.DialogService.openTPDetailsDialog(tp);
  }

  detailsTirePro(TireProID:number){
   this.router.navigateByUrl(`/titresPro/${TireProID}/edit-TP`);
  }

  GeneratePDF(TireProID:number){
    this.notifierService.showError("NE PAS OUBLIER ERREUR 200 A CAUSE RETOUR BINAIRE DE LA METHODE");
    this.titreproService.GeneratePdf(TireProID).subscribe();
  }

  deleteTirePro(TireProID:number, tpTitre:string){
    this.DialogService.openTPConfirmDialog('Voulez-vous vraiment supprimer '+tpTitre+' ?')
    .afterClosed().subscribe(res =>{
      if(res){
        this.titreproService.delete(TireProID).subscribe(res => {
          this.pageChanged(1);
          this.notifierService.showDeletedOK(tpTitre);
        });
      }
    });
  }
}
