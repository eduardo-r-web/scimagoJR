import { Component, OnInit , Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Predict } from 'src/app/core/interfaces/predict.interface';
import { MachineLearningModelService } from 'src/app/core/services/machine-learning-model/machine-learning-model.service';


@Component({
  selector: 'app-predict-view',
  templateUrl: './predict-view.component.html',
  styleUrls: ['./predict-view.component.scss'],
})
export class PredictViewComponent implements OnInit {
  prediction: number;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Predict,
    private machineLearningModelService: MachineLearningModelService
  ) {}

  ngOnInit(): void {
    this.machineLearningModelService.predict(this.data)
      .subscribe( data => {
        this.prediction = data.prediction
      });
      /* 
      this.machineLearningModelService.getHello()
        .subscribe( data => {
          console.log(data);
        }); */
  }

}
