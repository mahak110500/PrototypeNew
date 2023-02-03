import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';


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

	baseUrl = environment.baseUrl;

	constructor(private http: HttpClient, private router: Router) { }

	login(username: string, password: string) {
		return this.http.post<Authdata>(this.baseUrl+`login`,
			{ username, password }
		)
	}

	logout() {
		localStorage.removeItem('userDetails');
		localStorage.removeItem('token');
		localStorage.removeItem('newProjectData');
		this.router.navigate(['auth']);
	}

	//for authguard
	getAuth() {
		if (localStorage.getItem('token')) {
			return true;
		} else {
			return false
		}
	}
}
