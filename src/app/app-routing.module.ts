import { PromotionComponent } from './promotion/promotion.component';
import { DetailsTPComponent } from './titre-pro/details-tp/details-tp.component';
import { CreateTPComponent } from './titre-pro/create-tp/create-tp.component';
import { CreateVilleComponent } from './ville/create-ville/create-ville.component';
import { VilleComponent } from './ville/ville.component';
import { EtudiantCreateComponent } from './user/etudiant-create/etudiant-create.component';
import { AuthGuard } from './_helpers/auth.guard';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './user/details/details.component';
import { EtdiantEditComponent } from './user/etdiant-edit/etdiant-edit.component';
import { DetailsVilleComponent } from './ville/details-ville/details-ville.component';
import { TitreProComponent } from './titre-pro/titre-pro.component';

const routes: Routes = [
  //{ path:'', component: HomeComponent},
  { path:'', component: LoginComponent},
  { path:'login', component: LoginComponent},

  { path:'admin', component: AdminComponent, canActivate: [AuthGuard]},
  { path:'users', component: UserComponent, canActivate: [AuthGuard]},
  { path:'users/create-user', component: EtudiantCreateComponent, canActivate: [AuthGuard]},
  { path:'users/:id/details', component: UserDetailsComponent, canActivate: [AuthGuard]},
  { path:'users/:id/etudiant-edit', component: EtdiantEditComponent, canActivate: [AuthGuard]},
  { path:'villes', component: VilleComponent, canActivate: [AuthGuard]},
  { path:'villes/create-ville', component: CreateVilleComponent, canActivate: [AuthGuard]},
  { path:'villes/:id/edit-ville', component: DetailsVilleComponent, canActivate: [AuthGuard]},
  { path:'titresPro', component: TitreProComponent, canActivate: [AuthGuard]},
  { path:'titresPro/create-TP', component: CreateTPComponent, canActivate: [AuthGuard]},
  { path:'titresPro/:id/edit-TP', component: DetailsTPComponent, canActivate: [AuthGuard]},
  { path:'promotion', component: PromotionComponent, canActivate: [AuthGuard]},


  //otherwire, redirect to HomeComponent
  { path:'**', redirectTo:''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

