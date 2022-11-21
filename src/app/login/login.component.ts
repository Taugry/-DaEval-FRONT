import { NotifierService } from './../_services/notifier.service';
import { AuthenticationService } from './../_services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  submitted = false;
  error='';

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService:AuthenticationService,
    private router:Router,
    private route:ActivatedRoute,
    private notifierService: NotifierService
  ) {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: ['']
  });
  }

  ngOnInit(): void {

  }


  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    console.log(this.f['email'].value);
    console.log(this.f['password'].value);

    this.authenticationService.login(this.f['email'].value, this.f['password'].value)
      .pipe(first())
      .subscribe({
        next: ()=>{
          //il y a une url demandée dans les paramètres de route, prendre celle-ci sinon on redirige vers admin
          const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/admin';
          this.router.navigate([returnUrl]);
          this.notifierService.showLoginSucces();
        },
        error: error=> {
          this.notifierService.showError(error.message);
        }
      });


  }

}
