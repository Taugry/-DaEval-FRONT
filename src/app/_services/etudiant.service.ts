import { Etudiant } from './../_models/etudiant';
import { environment } from './../../environments/environment';
import { User } from './../_models/user';
import { LoginResponse } from '../_models/loginResponse';
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, map, Observable } from "rxjs";
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  private httpHeaders = {
    headers : new HttpHeaders({
         'Access-Control-Allow-Origin':'*'
    })
  }

  constructor(
    private httpClient:HttpClient,
    private authService:AuthenticationService,
    private router: Router){

  }

  //TODO remplacer l'url par ${environment.apiUrl}

  getAll(page:number, size:number, search:string){
    console.log(environment.apiUrl);
    return this.httpClient.get<Etudiant[]>(`${environment.apiUrl}/api/etudiant/pages/${page}/${size}`, this.httpHeaders);
  }

  findById(id:number){
    return this.httpClient.get<Etudiant>(`${environment.apiUrl}/api/etudiant/${id}`, this.httpHeaders)
               .pipe(map(userFound => {return userFound}));
  }

  countUsers(search:string){
    return this.httpClient.get<any>(`${environment.apiUrl}/api/etudiant/count/${search}`, this.httpHeaders);
  }

  delete(id:number){
    return this.httpClient.delete<void>(`${environment.apiUrl}/api/etudiant/${id}`, this.httpHeaders);
  }

  save(etu:Etudiant){
    return this.httpClient.post<any>(`${environment.apiUrl}/api/etudiant`, etu, this.httpHeaders)
              .pipe(map(savedUser => {return savedUser}));
  }

  update(etu:Etudiant){
    return this.httpClient.put<any>(`${environment.apiUrl}/api/etudiant`, etu, this.httpHeaders)
              .pipe(map(savedUser => {return savedUser}));
  }

  details(){
    let id = this.authService.currentUserValue.id
    this.router.navigateByUrl(`/users/${id}/details`);
  }
}
