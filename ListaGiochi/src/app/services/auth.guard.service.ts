import { Injectable } from '@angular/core';
import { CanActivateChild, CanDeactivate, Router, CanActivate} from '@angular/router';
import { Observable } from 'rxjs';
import { GameListComponent } from '../game-list/game-list.component';
import { RoutingEnum } from '../model/routing-enum';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivateChild, CanDeactivate<GameListComponent>{
  
  canActivateChild(childRoute: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
       return true;
  }

  canDeactivate(component: GameListComponent, currentRoute: import("@angular/router").ActivatedRouteSnapshot, currentState: import("@angular/router").RouterStateSnapshot, nextState?: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
    if(component.canNavigateForward()) {

    }else{
      return false;
    }
  }
  constructor(private router: Router){

  }
  

}
