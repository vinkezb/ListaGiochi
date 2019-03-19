import { Injectable } from '@angular/core';
import { CanActivate, CanDeactivate, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { GameListComponent } from '../game-list/game-list.component';
import { RoutingEnum } from '../model/routing-enum';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  canDeactivate(component: GameListComponent, currentRoute: import("@angular/router").ActivatedRouteSnapshot, currentState: import("@angular/router").RouterStateSnapshot, nextState?: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
    if(component.canNavigateForward()) {

    }else{
      return false;
    }
  }
  constructor(private router: Router){

  }
  
  canActivate(){
    if(sessionStorage.getItem('navigate')){
    return true;
  }else{
    this.router.navigateByUrl(RoutingEnum.base+'/'+RoutingEnum.home);
    return false;
  }
 } 
}
