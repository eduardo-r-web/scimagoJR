import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PredictViewComponent } from '../predict-view/predict-view.component';

@Component({
  selector: 'app-predict',
  templateUrl: './predict.component.html',
  styleUrls: ['./predict.component.scss']
})
export class PredictComponent implements OnInit {

  form: FormGroup;

  constructor( 
    private formBuilder: FormBuilder,
    public dialog: MatDialog
    ) { 
    this.buildForm();
  }

  ngOnInit(): void {
  }

  buildForm(): void{
    this.form = this.formBuilder.group({
      title: ['', [ Validators.required ]],
      total_docs: ['', [ Validators.required ]],
      sjr: ['', [ Validators.required ]],
      new_cites: ['', [ Validators.required ]],
      best_quartile: ['', [ Validators.required ]],
      total_refs: ['', [ Validators.required ]]
    });
  }

  openDialog() {
    if(this.form.valid){
      this.dialog.open(PredictViewComponent, {
        data: {
          title: this.form.get('title').value,
          total_docs: this.form.get('total_docs').value,
          sjr: this.form.get('sjr').value,
          new_cites: this.form.get('new_cites').value,
          best_quartile: this.form.get('best_quartile').value,
          total_refs: this.form.get('total_refs').value
        },
      });
    } else{
      this.form.markAllAsTouched();
    }
  }

  save( event: Event){

  }
}
