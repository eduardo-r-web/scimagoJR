import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Predict } from '../../interfaces/predict.interface';

@Injectable({
  providedIn: 'root'
})
export class MachineLearningModelService {


  constructor( private httpClient: HttpClient) { }

  getHello(){
    return this.httpClient.get(`${environment.API_URL}/`);
  }
  predict( dataPrediction: Predict ): Observable<any>{
    return this.httpClient.post(`${environment.API_URL}/predict`, dataPrediction);
  }

  classifier( dataClassifier: any ): Observable<any>{
    return this.httpClient.post(`${environment.API_URL}/classifier`, dataClassifier);
  }
}
