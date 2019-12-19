import {CanActivate, Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {FirebaseService} from './services/firebase-service/firebase.service';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

@Injectable()
export class NeedAuthGuard implements CanActivate {

  constructor(private router: Router,
              private firebaseService: FirebaseService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    const redirectUrl = route['_routerState']['url'];

    if (this.firebaseService.loggedIn) {
      return true;
    }

    this.router.navigateByUrl(
      this.router.createUrlTree(
        ['/log-on'], {
          queryParams: {
            redirectUrl
          }
        }
      )
    );

    return false;
  }
}
