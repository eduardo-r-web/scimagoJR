import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { User } from './../../core/interfaces/user.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide = true;
  form: FormGroup;
  alertMessage: string;
  showAlert: boolean;

  constructor( private formBuilder: FormBuilder,
               private authService: AuthService,
               private router: Router ) {
    this.buildForm();
    this.showAlert = false;
  }

  ngOnInit(): void {
  }

  buildForm(): void{
    this.form = this.formBuilder.group({
      username: ['', [ Validators.required, Validators.email ]],
      password: ['', [ Validators.required ]]
    });
  }

  login( event: Event ): void{
    event.preventDefault();
    if ( this.form.valid ){
      const user: User = this.form.value;
      this.authService.login( user )
        .subscribe( resp => {
          this.router.navigateByUrl('/modules');
        }, (error) => {
          this.showAlert = true;
          this.alertMessage = error.message;
        });
    }
  }
}
