import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
	providedIn: 'root'
})
export class LoggedinAuthGuard implements CanActivate {
	constructor(private authService: AuthService, private router: Router) { }

	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


			// if (this.authService.isLoggedIn) {
			// 	console.log(this.authService.isLoggedIn);
				
			// 	this.router.navigate(['/home-page/workspace'])
			// 	return false
			// } else {
			// 	return true
			// }
		if (localStorage.getItem('userDetails')) {
			return false;
		}
		this.router.navigate(['/home-page/workspace']);
		return true;
	}
}



