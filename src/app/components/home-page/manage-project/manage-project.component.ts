import { Component, OnInit } from '@angular/core';
import { ManageProjectsService } from 'src/app/services/manage-projects.service';

@Component({
  selector: 'app-manage-project',
  templateUrl: './manage-project.component.html',
  styleUrls: ['./manage-project.component.css']
})
export class ManageProjectComponent implements OnInit {
  projectData: any = [];
	dataList:any = [];
	p:any; //for pagination
	loader = true; //for loader


  constructor(private manage: ManageProjectsService) { }

  ngOnInit(): void {
    this.manage.getUsers().subscribe((res) => {
			this.projectData = res;
      
			console.log(this.projectData.content.dataList);
			this.dataList = this.projectData.content.dataList;
		});

		setTimeout(() => {
			this.loader = false;
			
		}, 1000);
  }

}
