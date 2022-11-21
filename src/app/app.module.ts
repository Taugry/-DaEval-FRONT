import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { UserDetailsComponent } from './user/details/details.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';
import { EtdiantEditComponent } from './user/etdiant-edit/etdiant-edit.component';
import { EtudiantCreateComponent } from './user/etudiant-create/etudiant-create.component';
import { MatConfirmDialogComponent } from './Dialog/User/mat-confirm-dialog/mat-confirm-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDetailsDialogComponent } from './Dialog/User/mat-details-dialog/mat-details-dialog.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { VilleComponent } from './ville/ville.component';
import { MenuNavBarComponent } from './menu-nav-bar/menu-nav-bar.component';
import { MatVilleDetailDialogComponent } from './Dialog/Ville/mat-ville-detail-dialog/mat-ville-detail-dialog.component';
import { MatVilleConfirmDialogComponent } from './Dialog/Ville/mat-ville-confirm-dialog/mat-ville-confirm-dialog.component';
import { CreateVilleComponent } from './ville/create-ville/create-ville.component';
import { DetailsVilleComponent } from './ville/details-ville/details-ville.component';
import { TitreProComponent } from './titre-pro/titre-pro.component';
import { MatTPDetailDialogComponent } from './Dialog/titrePro/mat-tp-detail-dialog/mat-tp-detail-dialog.component';
import { MatTPConfirmDialogComponent } from './Dialog/titrePro/mat-tp-confirm-dialog/mat-tp-confirm-dialog.component';
import { CreateTPComponent } from './titre-pro/create-tp/create-tp.component';
import { DetailsTPComponent } from './titre-pro/details-tp/details-tp.component';
import { PromotionComponent } from './promotion/promotion.component';
import { MatPromoConfirmDialogComponent } from './Dialog/promotion/mat-promo-confirm-dialog/mat-promo-confirm-dialog.component';
import { MatPromoDetailDialogComponent } from './Dialog/promotion/mat-promo-detail-dialog/mat-promo-detail-dialog.component';




@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatIconModule,
    MatDialogModule,
    MatButtonToggleModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AdminComponent,
    UserComponent,
    UserDetailsComponent,
    EtdiantEditComponent,
    EtudiantCreateComponent,
    MatConfirmDialogComponent,
    MatDetailsDialogComponent,
    VilleComponent,
    MenuNavBarComponent,
    MatVilleDetailDialogComponent,
    MatVilleConfirmDialogComponent,
    CreateVilleComponent,
    DetailsVilleComponent,
    TitreProComponent,
    MatTPDetailDialogComponent,
    MatTPConfirmDialogComponent,
    CreateTPComponent,
    DetailsTPComponent,
    PromotionComponent,
    MatPromoConfirmDialogComponent,
    MatPromoDetailDialogComponent
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}
  ],
  bootstrap: [AppComponent],
  entryComponents:[MatConfirmDialogComponent]
})
export class AppModule { }
