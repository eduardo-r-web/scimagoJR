import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Predict } from '../../interfaces/predict.interface';

@Injectable({
  providedIn: 'root'
})
export class MachineLearningModelService {
  private api_url: string ="";

  constructor( private httpClient: HttpClient) { }

  updateUrl( url: string ){
    this.api_url = url;
  }

  getHello(){
    return this.httpClient.get(`${this.api_url}/`);
  }
  predict( dataPrediction: Predict ): Observable<any>{
    return this.httpClient.post(`${this.api_url}/predict`, dataPrediction);
  }

  classifier( dataClassifier: any ): Observable<any>{
    return this.httpClient.post(`${this.api_url}/classifier`, dataClassifier);
  }
}
