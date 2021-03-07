import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {

  form: FormGroup;
  alertMessage: string;
  showAlert: boolean;
  messageError: boolean;

  constructor( private formBuilder: FormBuilder,
               private authService: AuthService ) {
    this.buildForm();
    this.showAlert = false;
    this.messageError = false;
  }

  ngOnInit(): void {
  }

  buildForm(): void{
    this.form = this.formBuilder.group({
      email: ['', [ Validators.required, Validators.email ]]
    });
  }

  forgotPassword( event: Event ): void{
    event.preventDefault();
    if ( this.form.valid ){
      const email = this.form.value.email;
      console.log(email);
      this.authService.forgotPassword( email )
        .subscribe( resp => {
          this.showAlert = true;
          this.alertMessage = 'Por revise su correo para continuar con la recuperación de la contraseña';
        }, error => {
          this.showAlert = true;
          this.messageError = true;
          this.alertMessage = error;
        });
    }
  }
}
