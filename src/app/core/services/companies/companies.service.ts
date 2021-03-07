import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { CompaniesListResponse, Company, DataCompany } from '../../interfaces/companies-list-response.interface';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  constructor( private http: HttpClient,
               private authServices: AuthService
                ) {}

  companiesList(): Observable<DataCompany[]>{
    const headers = new HttpHeaders({
      Authorization: `${this.authServices.tokenInfo.token_type} ${this.authServices.tokenInfo.access_token}`
    });

    return this.http.get<CompaniesListResponse>(`${environment.API_URL}/companies/`, {headers})
      .pipe(
        map( resp => resp.data )
      );
  }
}
