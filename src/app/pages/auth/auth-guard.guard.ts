import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
	providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
	constructor(private authService : AuthService,private router:Router){}

	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		// return true;

		
		if (!this.authService.isSellerLoggedIn) {
			this.router.navigate(['/home-page/workspace']);
		}
		
		if(localStorage.getItem('userDetails')){
			return true;
		}
       
		return this.authService.isSellerLoggedIn;

		// this.router.navigate(['/auth']);
		// return false;

	}

}
