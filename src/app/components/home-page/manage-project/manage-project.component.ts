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
	a:any;
	b:any;


  constructor(private manage: ManageProjectsService) { }

  ngOnInit(): void {
    this.manage.getUsers().subscribe((res) => {
			this.projectData = res;
      
			// console.log(this.projectData.content.dataList);
			this.dataList = this.projectData.content.dataList;

			this.dataList = this.dataList.sort((a, b) => b.id - a.id); //b.id - a.id for descending order
			console.log(this.dataList);
			

			// let newarr = this.dataList.sort((this.a,this.b) => this.a.id - this.b.id)
		});

		setTimeout(() => {
			this.loader = false;
			
		}, 1000);
  }


}
