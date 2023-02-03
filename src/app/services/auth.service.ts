import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

export interface Authdata {
	content: any;
	username: string,
	password: string,
	token: string
}

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	isLoggedIn = new BehaviorSubject<boolean>(false);


	constructor(private http: HttpClient, private router: Router) { }

	login(username: string, password: string) {
		return this.http.post<Authdata>(`http://103.127.29.85:3000/api/admin/login`,
			{ username, password }
		).subscribe(result => {
			console.log(result);

			if (result && result.content.dataList[0]) {
				this.isLoggedIn.next(true);

				localStorage.setItem('userDetails', JSON.stringify(result.content.dataList[0].userDetails));
				localStorage.setItem('token', JSON.stringify(result.content.dataList[0].token));

				this.router.navigate(['/home-page/workspace']);
			}
		})
	}

	logout(){
		localStorage.removeItem('userDetails');
		localStorage.removeItem('token');
		localStorage.removeItem('newProjectData');
		this.router.navigate(['auth']);
	}

	getAuth(){
		if(localStorage.getItem('token')){

			return true;
		} else{
			return false
		}
	}
}
