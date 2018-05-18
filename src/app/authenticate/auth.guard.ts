import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AutheServiceService } from '../authenticate-service/authe-service.service'
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private serviceData: AutheServiceService, private myRoute: Router) {
   }
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(this.serviceData.isLoggednIn()){
        return true;
      }
      else{
        this.myRoute.navigate(['/login']);
        localStorage.setItem("authenticated", "false");
        return false;
      }
  }
}
