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
      total_docs: ['', [ Validators.required ]],
      new_cities: ['', [ Validators.required ]],
      best_quartile: ['', [ Validators.required ]],
      total_refs: ['', [ Validators.required ]]
    });
  }

  openDialog() {
    if(this.form.valid){
      this.dialog.open(PredictViewComponent, {
        data: {
          total_docs: this.form.get('total_docs').value,
          new_cities: this.form.get('new_cities').value,
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
