import { Component, OnInit } from '@angular/core';
import { MachineLearningModelService } from 'src/app/core/services/machine-learning-model/machine-learning-model.service';

@Component({
  selector: 'app-machine-learning',
  templateUrl: './machine-learning.component.html',
  styleUrls: ['./machine-learning.component.scss']
})
export class MachineLearningComponent implements OnInit {

  constructor(
    private machineLearningModelService: MachineLearningModelService
  ) { }

  ngOnInit(): void {
  }

}
