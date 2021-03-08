import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompaniesService } from 'src/app/core/services/companies/companies.service';

@Component({
  selector: 'app-companies-create',
  templateUrl: './companies-create.component.html',
  styleUrls: ['./companies-create.component.scss']
})
export class CompaniesCreateComponent implements OnInit {

  form: FormGroup;

  constructor( private companiesServices: CompaniesService,
               private formBuilder: FormBuilder ) { }

  ngOnInit(): void {
  }

  buildForm(){
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(50)]],
      identification_type: ['nit', [ Validators.required ]],
      identification_number: []
    });
  }

}
