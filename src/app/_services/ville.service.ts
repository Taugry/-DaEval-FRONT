import { Ville } from './../_models/ville';
import { environment } from '../../environments/environment';
import { LoginResponse } from '../_models/loginResponse';
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, map, Observable } from "rxjs";
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';

@Injectable({providedIn: 'root'})
export class VilleService {

  Ville!:Ville;

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

  getAll(){
    return this.httpClient.get<Ville[]>(`${environment.apiUrl}/api/ville`, this.httpHeaders);
  }
  getAllPages(page:number, size:number, search:string){
    return this.httpClient.get<Ville[]>(`${environment.apiUrl}/api/ville/pages/${page}/${size}/${search}`, this.httpHeaders);
  }
  findById(id:number){
    return this.httpClient.get<Ville>(`${environment.apiUrl}/api/ville/${id}`, this.httpHeaders)
               .pipe(map(userFound => {return userFound}));
  }
  countVille(){
    return this.httpClient.get<any>(`${environment.apiUrl}/api/ville/count`, this.httpHeaders);
  }
  countVilleWithSearch(search:string){
    return this.httpClient.get<any>(`${environment.apiUrl}/api/ville/count/${search}`, this.httpHeaders);
  }

  delete(id:number){
    return this.httpClient.delete<any>(`${environment.apiUrl}/api/ville/delete/${id}`, this.httpHeaders);
  }

  save(user:Ville){
    return this.httpClient.post<any>(`${environment.apiUrl}/api/ville`, user, this.httpHeaders)
              .pipe(map(savedUser => {return savedUser}));
  }

  update(user:Ville){
    return this.httpClient.put<any>(`${environment.apiUrl}/api/ville`, user, this.httpHeaders)
              .pipe(map(savedUser => {return savedUser}));
  }
}
