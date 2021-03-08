import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { CompaniesCreateResponse } from '../../interfaces/companies-create-response.interface';
import { CompaniesListResponse } from '../../interfaces/companies-list-response.interface';
import { CompaniesReadResponse } from '../../interfaces/companies-read-response';
import { Company, CompanyAttributes } from '../../interfaces/company.interface';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  constructor( private http: HttpClient,
               private authServices: AuthService
                ) {}

  companiesList(): Observable<Company[]>{
    const headers = new HttpHeaders({
      Authorization: `${this.authServices.tokenInfo.token_type} ${this.authServices.tokenInfo.access_token}`
    });

    return this.http.get<CompaniesListResponse>(`${environment.API_URL}/companies/`, {headers})
      .pipe(
        map( resp => resp.data )
      );
  }

  companiesRead( idCompany: number ): Observable<Company>{
    const headers = new HttpHeaders({
      Authorization: `${this.authServices.tokenInfo.token_type} ${this.authServices.tokenInfo.access_token}`
    });

    return this.http.get<CompaniesReadResponse>(`${environment.API_URL}/companies/${idCompany}/`, {headers})
      .pipe(
        map( resp => resp.data)
      );
  }

  companiesCreate( companyAttributes: CompanyAttributes ): Observable<CompaniesCreateResponse>{
    const headers = new HttpHeaders({
      content_type: 'application/vnd.api+json',
      authorization: `${this.authServices.tokenInfo.token_type} ${this.authServices.tokenInfo.access_token}`
    });

    const authData = {
        data: {
          type: 'Company',
          attributes: {
            ...companyAttributes
          }
        }
    };
    return this.http.post<CompaniesCreateResponse>(`${environment.API_URL}/companies/`, authData, {headers});
  }
}
