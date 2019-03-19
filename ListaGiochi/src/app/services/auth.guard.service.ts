import { Injectable } from '@angular/core';
import { CanActivate, CanDeactivate, Router} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private router: Router){

  }
  
  canActivate(){
    if(sessionStorage.getItem('navigate')){
    return true;
  }else{
    this.router.navigateByUrl('home')
    return false;
  }
 } 
}
