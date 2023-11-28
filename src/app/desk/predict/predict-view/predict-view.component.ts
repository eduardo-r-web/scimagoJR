import { Component, OnInit , Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Predict } from 'src/app/core/interfaces/predict.interface';


@Component({
  selector: 'app-predict-view',
  templateUrl: './predict-view.component.html',
  styleUrls: ['./predict-view.component.scss'],
})
export class PredictViewComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Predict) {}

  ngOnInit(): void {
  }

}
