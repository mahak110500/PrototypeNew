import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject } from "rxjs";
import { User } from "../models/user.model";
import {UserData} from "../models/userData.model"


@Injectable({
	providedIn: 'root'
})

export class ProjectsService{
	profileForm: any;
	newProjectData: any;
	customerId:any;
	projectId:any;

    user: any = new BehaviorSubject<User | null>(null);

    constructor(private http: HttpClient, private router:Router) { }

	//to display users data in manage-projects
    getUsers(){
        let auth_token = JSON.parse(localStorage.getItem('token'));
        // console.log(auth_token);
        
        const headers = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `${auth_token}`
        });
    
        const requestOptions = { headers: headers };

        return this.http.get<User>("http://103.127.29.85:3000/api/admin/manage-project/", requestOptions);
    }

	postUserData(formData) {
		this.profileForm = formData;


		let auth_token = JSON.parse(localStorage.getItem('token'));
		// console.log(auth_token);

		const headers = new HttpHeaders({
			'Content-Type': 'application/json',
			'Authorization': `${auth_token}`
		});

		const options = { headers: headers }
		// console.log(options);


		return this.http.post<UserData>(`http://103.127.29.85:3000/api/admin/save-customer-project`, formData, options)

	}

	getUserData() {
		this.newProjectData = JSON.parse(localStorage.getItem('newProjectData'));

		let customerId = this.newProjectData.customer_insertId;
		let projectId = this.newProjectData.project_insertId;

		let auth_token = JSON.parse(localStorage.getItem('token'));

		const headers = new HttpHeaders({
			'Content-Type': 'application/json',
			'Authorization': `${auth_token}`
		});

		const options = { headers: headers }


		return this.http.get(`http://103.127.29.85:3000/api/admin/getcustomerbyid/`+projectId, options

		)
	}

	UpdateData(formData){
		this.profileForm = formData;

		this.newProjectData = JSON.parse(localStorage.getItem('newProjectData'));
		let customerId = this.newProjectData.customer_insertId;
		let projectId = this.newProjectData.project_insertId;



		let auth_token = JSON.parse(localStorage.getItem('token'));
		const headers = new HttpHeaders({
			'Content-Type': 'application/json',
			'Authorization': `${auth_token}`
		});
		const options = { headers: headers }

		return this.http.put<UserData>(`http://103.127.29.85:3000/api/admin/update-customer-project/`+customerId+`/project/`+projectId, formData, options)


	}

	uploadFile(files:any) {

		this.newProjectData = JSON.parse(localStorage.getItem('newProjectData'));

		let customerId = this.newProjectData.customer_insertId;
		let projectId = this.newProjectData.project_insertId;

		let file : File = files[0];
		
		
		const formData = new FormData();
		formData.append('customerId', customerId);
		formData.append('projectId', projectId);
		formData.append('file', file);
		let auth_token = JSON.parse(localStorage.getItem('token'));

		const headers = new HttpHeaders({
			'Authorization': `${auth_token}`
		});

		const options = { headers: headers }
		// const FormData = { customerId, projectId }


		return this.http.post<any>(`http://103.127.29.85:3000/api//admin/upload-doc`,formData,options)
	}

 


}