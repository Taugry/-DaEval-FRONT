import { Promotion } from './../_models/promotion';
import { environment } from './../../environments/environment';
import { LoginResponse } from '../_models/loginResponse';
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, map, Observable } from "rxjs";
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';

@Injectable({providedIn: 'root'})
export class PromotionService {

  promotion!:Promotion;

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
    return this.httpClient.get<Promotion[]>(`${environment.apiUrl}/api/promotion`, this.httpHeaders);
  }

  findById(id:number){
    return this.httpClient.get<Promotion>(`${environment.apiUrl}/api/promotion/${id}`, this.httpHeaders)
               .pipe(map(userFound => {return userFound}));
  }

  delete(id:number){
    return this.httpClient.delete<any>(`${environment.apiUrl}/api/promotion/delete/${id}`, this.httpHeaders);
  }

  // save(promo:Promotion){
  //   return this.httpClient.post<any>(`${environment.apiUrl}/api/ville`, promo, this.httpHeaders)
  //             .pipe(map(savedUser => {return savedUser}));
  // }

  // update(promo:Promotion){
  //   return this.httpClient.put<any>(`${environment.apiUrl}/api/ville`, promo, this.httpHeaders)
  //             .pipe(map(savedUser => {return savedUser}));
  // }

}
