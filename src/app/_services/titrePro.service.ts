import { TitrePro } from '../_models/titrePro';
import { environment } from '../../environments/environment';
import { LoginResponse } from '../_models/loginResponse';
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, map, Observable } from "rxjs";
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';

@Injectable({providedIn: 'root'})
export class TitreProService {

  TitrePro!:TitrePro;

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
    return this.httpClient.get<TitrePro[]>(`${environment.apiUrl}/api/tp`, this.httpHeaders);
  }
  getAllPages(page:number, size:number, search:string){
    return this.httpClient.get<TitrePro[]>(`${environment.apiUrl}/api/tp/pages/${page}/${size}/${search}`, this.httpHeaders);
  }
  findById(id:number){
    return this.httpClient.get<TitrePro>(`${environment.apiUrl}/api/tp/${id}`, this.httpHeaders)
               .pipe(map(found => {return found}));
  }
  countTitrePro(){
    return this.httpClient.get<any>(`${environment.apiUrl}/api/tp/count`, this.httpHeaders);
  }
  countTitreProWithSearch(search:string){
    return this.httpClient.get<any>(`${environment.apiUrl}/api/tp/count/${search}`, this.httpHeaders);
  }

  delete(id:number){
    return this.httpClient.delete<any>(`${environment.apiUrl}/api/tp/delete/${id}`, this.httpHeaders);
  }

  save(tp:TitrePro){
    return this.httpClient.post<any>(`${environment.apiUrl}/api/tp`, tp, this.httpHeaders)
              .pipe(map(saved => {return saved}));
  }

  update(tp:TitrePro){
    return this.httpClient.put<any>(`${environment.apiUrl}/api/tp`, tp, this.httpHeaders)
              .pipe(map(updated => {return updated}));
  }
  GeneratePdf(id:number){
    return this.httpClient.get<any>(`${environment.apiUrl}/api/tp/${id}/fiche`, this.httpHeaders);
  }



}
