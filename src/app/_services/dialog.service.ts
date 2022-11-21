import { MatPromoDetailDialogComponent } from './../Dialog/promotion/mat-promo-detail-dialog/mat-promo-detail-dialog.component';
import { MatPromoConfirmDialogComponent } from './../Dialog/promotion/mat-promo-confirm-dialog/mat-promo-confirm-dialog.component';
import { MatTPConfirmDialogComponent } from './../Dialog/titrePro/mat-tp-confirm-dialog/mat-tp-confirm-dialog.component';
import { MatTPDetailDialogComponent } from './../Dialog/titrePro/mat-tp-detail-dialog/mat-tp-detail-dialog.component';
import { TitrePro } from './../_models/titrePro';
import { MatVilleConfirmDialogComponent } from './../Dialog/Ville/mat-ville-confirm-dialog/mat-ville-confirm-dialog.component';
import { MatVilleDetailDialogComponent } from './../Dialog/Ville/mat-ville-detail-dialog/mat-ville-detail-dialog.component';
import { MatDetailsDialogComponent } from '../Dialog/User/mat-details-dialog/mat-details-dialog.component';
import { User } from './../_models/user';
import { MatConfirmDialogComponent } from '../Dialog/User/mat-confirm-dialog/mat-confirm-dialog.component';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Ville } from '../_models/ville';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }

  openUserConfirmDialog(msg: string){
    return this.dialog.open( MatConfirmDialogComponent,{
      width: '390px',
      panelClass: 'confirm-dialog-container',
      disableClose: true,
      data: {
        message: msg
      }
    });
  }

  openUserDetailsDialog(u: User){
    return this.dialog.open( MatDetailsDialogComponent,{
      width: '350',
      panelClass: 'confirm-dialog-container',
      disableClose: true,
      data: {
        user: u
      }
    });
  }


  openVilleDetailsDialog(v: Ville){
    return this.dialog.open( MatVilleDetailDialogComponent,{
      width: '350',
      panelClass: 'confirm-dialog-container',
      disableClose: true,
      data: {
        ville: v
      }
    });
  }
  openVilleConfirmDialog(msg: string){
    return this.dialog.open( MatVilleConfirmDialogComponent,{
      width: '390px',
      panelClass: 'confirm-dialog-container',
      disableClose: true,
      data: {
        message: msg
      }
    });
  }

  openTPDetailsDialog(tp: TitrePro){
    return this.dialog.open( MatTPDetailDialogComponent,{
      width: '350',
      panelClass: 'confirm-dialog-container',
      disableClose: true,
      data: {
        tp: tp
      }
    });
  }
  openTPConfirmDialog(msg: string){
    return this.dialog.open( MatTPConfirmDialogComponent,{
      width: '390px',
      panelClass: 'confirm-dialog-container',
      disableClose: true,
      data: {
        message: msg
      }
    });
  }

  openPromoDetailsDialog(tp: TitrePro){
    return this.dialog.open( MatPromoDetailDialogComponent,{
      width: '350',
      panelClass: 'confirm-dialog-container',
      disableClose: true,
      data: {
        tp: tp
      }
    });
  }
  openPromoConfirmDialog(msg: string){
    return this.dialog.open( MatPromoConfirmDialogComponent,{
      width: '390px',
      panelClass: 'confirm-dialog-container',
      disableClose: true,
      data: {
        message: msg
      }
    });
  }

}
