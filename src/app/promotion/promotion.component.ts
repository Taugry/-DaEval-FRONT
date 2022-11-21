import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { UserService } from 'src/app/_services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NotifierService } from 'src/app/_services/notifier.service';
import { PromotionService } from 'src/app/_services/promotion.service';
import { Promotion } from '../_models/promotion';
import { DialogService } from '../_services/dialog.service';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.css']
})
export class PromotionComponent implements OnInit {

  currentUsername!: string;
  currentPromoID!: number;

  Promotions?: Promotion[];
  itemsPerPage: number;
  currentPage:number;
  totalItems:number = 0;
  searchExpression:string = '';
  searchForm!: FormGroup;

  constructor(
    private formBuilder:FormBuilder,
    private userService:UserService,
    private promotionService:PromotionService,
    private authService:AuthenticationService,
    private route:ActivatedRoute,
    private router: Router,
    private notifierService: NotifierService,
    private DialogService: DialogService) {
      this.itemsPerPage = 5;
      this.currentPage = 1;
  }

  ngOnInit(): void {
    this.getPromotionList();
    this.InitdetailsForm();
    this.notifierService.showError("rajouter 'back et front : pagination + count' & "
    +" NGFOR sur etudiant associé pour l'affichage");

  }
  getPromotionList(){
    this.promotionService.getAll().subscribe(promotions=> {
      this.Promotions = promotions;
    });
  }
  get f() { return this.searchForm.controls; }
  InitdetailsForm(){
    this.searchForm = this.formBuilder.group({
      searchExpression:['']
    });
  }
  pageChanged(page:number){
    this.currentPage = page;
    this.getPromotionList();
  }

  onSubmit(){
    // this.searchExpression = this.f['searchExpression'].value;

    // this.promotionService.countVilleWithSearch(this.searchExpression).subscribe(countDto => {
    //   this.totalItems = countDto;

    //   if(this.totalItems >= this.itemsPerPage){
    //     this.promotionService.getAllPages(this.currentPage, this.totalItems, this.searchExpression).subscribe(villes=> {
    //       this.villes = villes;

    //     });
    //   }else{
    //     this.promotionService.getAllPages(this.currentPage, this.itemsPerPage, this.searchExpression).subscribe(villes=> {
    //       this.villes = villes;

    //     });
    //   }
    // });
  }

  createPromotion(){
    //this.router.navigateByUrl(`villes/create-ville`);
  }

  viewPromotionDetails(promo:Promotion){
    // this.DialogService.openVilleDetailsDialog(ville);
  }

  detailsPromotion(PromoID:number){
    // this.router.navigateByUrl(`/villes/${villeID}/edit-ville`);
  }

  deletePromotion(p:Promotion){
    this.DialogService.openPromoConfirmDialog('Voulez-vous vraiment supprimer la promo du titre '+p.titreProfessionnelTitre+''
    +' à '+p.villeNom+' ?')
    .afterClosed().subscribe(res =>{
      if(res){
        this.promotionService.delete(p.id).subscribe(res => {
          this.pageChanged(1);
          this.notifierService.showDeletedOK('promo du titre '+p.titreProfessionnelTitre+' à '+p.villeNom);
        });
      }
    });
  }


}
