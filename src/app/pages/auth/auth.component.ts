import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
	selector: 'app-auth',
	templateUrl: './auth.component.html',
	styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
	formData: any;
	showError: string = null;

	//for authguard
	isSellerLoggedIn = new BehaviorSubject<boolean>(false);



	constructor(private authService: AuthService, private router: Router) { }

	ngOnInit(): void {
	}


	onlogin(loginForm: NgForm) {
		if (!loginForm.valid) {
			return;
		}

		this.authService.login(loginForm.value.email, loginForm.value.password);
		// this.authService.getAuth();

	}

}
