import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from '../core/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-desk',
  templateUrl: './desk.component.html',
  styleUrls: ['./desk.component.scss']
})
export class DeskComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor( private breakpointObserver: BreakpointObserver,
               private authService: AuthService,
               private router: Router) { }

  logout(): void {
    this.authService.logout()
      .subscribe( resp => {
        this.authService.removeStorage();
        this.router.navigateByUrl('/login');
      }, error => {
        console.log(error);
      });
  }

}
