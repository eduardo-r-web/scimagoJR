import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MachineLearningModelService } from 'src/app/core/services/machine-learning-model/machine-learning-model.service';

@Component({
  selector: 'app-classifier-view',
  templateUrl: './classifier-view.component.html',
  styleUrls: ['./classifier-view.component.scss']
})
export class ClassifierViewComponent implements OnInit {

  classifier: number;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private machineLearningModelService: MachineLearningModelService
  ) {}

  ngOnInit(): void {
    this.machineLearningModelService.classifier(this.data)
      .subscribe( data => {
        this.classifier = data.classifier
      });
  }

}
