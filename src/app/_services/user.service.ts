import { environment } from './../../environments/environment';
import { User } from './../_models/user';
import { LoginResponse } from '../_models/loginResponse';
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, map, Observable } from "rxjs";
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';

@Injectable({providedIn: 'root'})
export class UserService{

  userTocheck!: User;

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
    return this.httpClient.get<User[]>(`${environment.apiUrl}/api/user/pages/${page}/${size}/${search}`, this.httpHeaders);
  }

  findById(id:number){
    return this.httpClient.get<User>(`${environment.apiUrl}/api/user/${id}`, this.httpHeaders)
               .pipe(map(userFound => {return userFound}));
  }

  countUsers(){
    return this.httpClient.get<any>(`${environment.apiUrl}/api/user/count`, this.httpHeaders);
  }
  countUsersWithSearch(search:string){
    return this.httpClient.get<any>(`${environment.apiUrl}/api/user/count/${search}`, this.httpHeaders);
  }

  delete(id:number){
    return this.httpClient.delete<any>(`${environment.apiUrl}/api/user/delete/${id}`, this.httpHeaders);
  }

  save(user:User){
    return this.httpClient.post<any>(`${environment.apiUrl}/api/user`, user, this.httpHeaders)
              .pipe(map(savedUser => {return savedUser}));
  }

  update(user:User){
    return this.httpClient.put<any>(`${environment.apiUrl}/api/user`, user, this.httpHeaders)
              .pipe(map(savedUser => {return savedUser}));
  }

  details(){
    let id = this.authService.currentUserValue.id
    this.router.navigateByUrl(`/users/${id}/details`);
  }

  detailTarget(id: number){

    this.findById(id)
    .subscribe(userById => {
      this.userTocheck = userById;

      if(this.userTocheck.role == "ETUDIANT"){
        this.router.navigateByUrl(`/users/${id}/etudiant-edit`);
      }else{
        this.router.navigateByUrl(`/users/${id}/details`);
      }
    });

  }

}
