import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ClassifierViewComponent } from '../classifier-view/classifier-view.component';

@Component({
  selector: 'app-classifier',
  templateUrl: './classifier.component.html',
  styleUrls: ['./classifier.component.scss']
})
export class ClassifierComponent implements OnInit {

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
      new_cites: ['', [ Validators.required ]],
      best_quartile: ['', [ Validators.required ]],
      total_refs: ['', [ Validators.required ]]
    });
  }

  openDialog() {
    if(this.form.valid){
      this.dialog.open(ClassifierViewComponent, {
        data: {
          total_docs: this.form.get('total_docs').value,
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
