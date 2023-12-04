import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MachineLearningModelService } from 'src/app/core/services/machine-learning-model/machine-learning-model.service';

@Component({
  selector: 'app-api-dialog',
  templateUrl: './api-dialog.component.html',
  styleUrls: ['./api-dialog.component.scss']
})
export class ApiDialogComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private machineLearningModelService: MachineLearningModelService
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void{
    this.form = this.formBuilder.group({
      api_url: ['', [ Validators.required ]]
    });
  }

  save( event: Event){
    if(this.form.valid){
      console.log(this.form.get('api_url').value);
      this.machineLearningModelService.updateUrl(this.form.get('api_url').value);
    }
  }
}
