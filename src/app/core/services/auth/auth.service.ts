import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { User } from '../../interfaces/user.interface';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AuthResponse, TokenInformation } from '../../interfaces/auth-response.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  tokenInfo: TokenInformation = {
    access_token: '',
    expires_in: null,
    refresh_token: '',
    scope: '',
    token_type: ''
  };

  constructor(private http: HttpClient) {
    this.readToken();
  }

  login(user: User): Observable<TokenInformation> {
    const authData = new HttpParams()
      .set('grant_type', 'password')
      .set('client_id', environment.CLIENT_ID)
      .set('username', user.username)
      .set('password', user.password);

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    return this.http.post<AuthResponse>(`${environment.API_URL}/login/`, authData.toString(), { headers })
      .pipe(
        catchError(error => {
          throw new Error(error.error.errors[0].detail);
        }),
        map((resp: AuthResponse) => {
          const info: TokenInformation = resp.data.attributes;
          this.saveToken(info.access_token, info.expires_in, info.refresh_token, info.scope, info.token_type);
          return resp.data.attributes;
        })
      );
  }

  logout(): Observable<any> {
    const authData = new HttpParams()
      .set('client_id', environment.CLIENT_ID)
      .set('token', this.tokenInfo.access_token);

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `${this.tokenInfo.token_type} ${this.tokenInfo.access_token}`
    });

    return this.http.post(`${environment.API_URL}/logout/`, authData.toString(), { headers });
  }

  forgotPassword(email: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/vnd.api+json',
    });

    const authData = {
      data: {
        type: 'ResetPasswordRequestToken',
        attributes: {
          email
        }
      }
    };

    return this.http.post(`${environment.API_URL}/forgot-password/`, authData, { headers })
      .pipe(
        catchError(error => {
          throw new Error(error.error.errors[0].detail);
        }),
        map((resp: any) => resp.data)
      );
  }

  ResetPassword( pass1: string, pass2: string, token: string ) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/vnd.api+json',
    });

    const authData = {
      data: {
        type: 'ResetPasswordView',
        attributes: {
          password: pass1,
          password_confirmation: pass2,
          token
        }
      }
    };

    return this.http.post(`${ environment.API_URL }/reset-password/`, authData, {headers})
      .pipe(
        catchError( error => {
          throw new Error(error.error.errors[0].detail);
        }),
        map( (resp: any) => resp.data)
      );
  }

  saveToken(accessToken: string, expiration: number, refreshToken: string, scope: string, tokenType: string): void {
    this.tokenInfo = {
      access_token: accessToken,
      expires_in: expiration,
      refresh_token: refreshToken,
      scope,
      token_type: tokenType
    };
    localStorage.setItem('access_token', this.tokenInfo.access_token);
    localStorage.setItem('expiration', this.tokenInfo.expires_in.toString());
    localStorage.setItem('refresh_token', this.tokenInfo.refresh_token);
    localStorage.setItem('scope', this.tokenInfo.scope);
    localStorage.setItem('token_type', this.tokenInfo.token_type);
  }

  readToken(): void {
    if (localStorage.getItem('access_token')) {
      this.tokenInfo = {
        access_token: localStorage.getItem('access_token'),
        expires_in: parseInt(localStorage.getItem('expiration'), 10),
        refresh_token: localStorage.getItem('refresh_token'),
        scope: localStorage.getItem('scope'),
        token_type: localStorage.getItem('token_type')
      };
    }
  }

  isAuthenticated(): boolean {
    return this.tokenInfo.access_token.length > 2;
  }

  removeStorage(): void {
    localStorage.removeItem('access_token');
    localStorage.removeItem('expiration');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('scope');
    localStorage.removeItem('token_type');
  }
}
