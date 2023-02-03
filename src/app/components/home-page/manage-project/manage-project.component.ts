import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
	selector: 'app-manage-project',
	templateUrl: './manage-project.component.html',
	styleUrls: ['./manage-project.component.css']
})
export class ManageProjectComponent implements OnInit {
	projectData: any = [];
	dataList: any = [];
	p: any; //for pagination
	loader = true; //for loader

	userId1: any;
	userId2: any;


	constructor(private manage: ProjectsService) { }

	ngOnInit(): void {
		this.manage.getUsers().subscribe((res) => {
			this.loader = false;

			this.projectData = res;

			// console.log(this.projectData.content.dataList);
			this.dataList = this.projectData.content.dataList;

			this.dataList = this.dataList.sort((userId1, userId2) => userId2.id - userId1.id); //b.id - a.id for descending order
			
		});

	}


}
