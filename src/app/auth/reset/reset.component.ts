import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {

  form: FormGroup;
  hide1 = true;
  hide2 = true;
  token: string;
  urlTree: any;
  showAlert: boolean;
  messageError: boolean;
  alertMessage = '';
  constructor( private router: Router,
               private authService: AuthService,
               private FormBuilder: FormBuilder) {
    this.buildForm();
    this.showAlert = false;
    this.messageError = false;
  }

  ngOnInit(): void {
    this.urlTree = this.router.parseUrl(this.router.url);
    this.token = this.urlTree.queryParams.token;
  }

  buildForm(): void{
    this.form = this.FormBuilder.group({
      password: ['', [Validators.required]],
      passwordConfirm: ['', [Validators.required]],
    });
  }

  get passwordEquals(): boolean{
    return this.form.get('password').value === this.form.get('passwordConfirm').value;
  }

  resetPassword( event: Event ): void{
    event.preventDefault();
    if ( this.form.valid ){
      if ( !this.passwordEquals ){
        this.showAlert = true;
        this.messageError = true;
        this.alertMessage = 'Las contraseñas no son iguales';
      }else{
        this.showAlert = false;
        const password = this.form.value.password;
        const passwordConfirm = this.form.value.passwordConfirm;
        this.authService.ResetPassword( password, passwordConfirm, this.token )
          .subscribe( resp => {
            this.showAlert = true;
            this.messageError = false;
            this.alertMessage = 'Contraseña modificada con éxito';
          }, error => {
            this.showAlert = true;
            this.messageError = true;
            this.alertMessage = error.message;
          });
      }
    }else{
      this.showAlert = true;
      this.messageError = true;
      this.alertMessage = 'Por favor verificar que todos los campos esten diligenciados';
    }
  }

}
