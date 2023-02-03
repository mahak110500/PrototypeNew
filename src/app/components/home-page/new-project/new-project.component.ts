import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
	selector: 'app-new-project',
	templateUrl: './new-project.component.html',
	styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {

	backInfo: any = false;

	id: any;
	profileFormGroup: FormGroup;
	imgFormGroup: FormGroup;
	resultImg: string = '';

	files: any[] = [];

	profileForm: any = {}
	newData: any;

	url: any = '';

	showError: boolean = false;

	constructor(private fb: FormBuilder, private projectsService: ProjectsService, private router: Router) { }

	ngOnInit(): void {
		this.profileFormGroup = this.fb.group({
			firstName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z ]*$/)]],
			lastName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z ]*$/)]],
			orderId: '',
			email: ['', [Validators.required, Validators.email]],
			phone: ['', [Validators.required, Validators.minLength(10), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
			address: ['', Validators.required],
			projectName: ['', Validators.required],
			completePercent: ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
			startDate: ['', Validators.required],
			endDate: ['', Validators.required],
			projectDescription: ['', Validators.required],

		})

		this.imgFormGroup = this.fb.group({
			imgInput: ['', Validators.required]
		})
	}

	onSubmit(profileForm) {
		this.profileForm = profileForm.value;


		this.newData = JSON.parse(localStorage.getItem('newProjectData'));


		if (this.newData != null) {
			this.onUpdate(this.profileForm);

		} else {
			this.projectsService.postUserData(this.profileForm).subscribe((res: any) => {
				// console.log(res.content.dataList[0]);
				localStorage.setItem('newProjectData', JSON.stringify(res.content.dataList[0]));
			});

		}

	}


	//For drag and drop and uploading files

	/**
	  * on file drop handler
	  */
	onFileDropped($event: any) {
		this.prepareFilesList($event);
		// this.onSelectFile($event);

	}

	/**
	 * handle file from browsing
	 */
	fileBrowseHandler(files) {
		this.prepareFilesList(files);

	}

	/**
	 * for downloading file
	 */
	onDownload(path: any) {

		if (path.split('.') === "pdf" ||
			path.split('.') === "doc" ||
			path.split('.') === "docx" ||
			path.split('.') === "txt" ||
			path.split('.') === "xlsx" ||
			path.split('.') === "xls" ||
			path.split('.') === "csv"
		) {
			var link = document.createElement('a');
			link.href = 'http://103.127.29.85/prototype/node-backend/uploads/' + path;
			link.download = 'http://103.127.29.85/prototype/node-backend/uploads/' + path;
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
		} else {
			window.open('http://103.127.29.85/prototype/node-backend/uploads/' + path, '_blank');
		}
	}


	/**
	 * Delete file from files list
	 * @param index (File index)
	 */
	deleteFile(index: number) {
		// this.files.splice(index, 1);
		// window.alert('Are you sure you want to delete?')

		var result = confirm("Are you sure you want to delete?");
		if (result) {
			this.files.splice(index, 1);

			alert('Deleted');
		} else {
			alert('Not deleted');
		}
	}

	/**
	 * Simulate the upload process
	 */
	uploadFilesSimulator(index: number) {
		setTimeout(() => {
			if (index === this.files.length) {
				return;
			} else {
				const progressInterval = setInterval(() => {
					if (this.files[index].progress === 100) {
						clearInterval(progressInterval);
						this.uploadFilesSimulator(index + 1);
					} else {
						this.files[index].progress += 5;
					}
				}, 200);
			}
		}, 1000);
	}

	/**
	* Convert Files list to normal array list
	* @param files (Files List)
	*/
	prepareFilesList(files: any) {

		for (const item of files) {
			item.progress = 0;
			this.files.push(item);
		}
		this.uploadFilesSimulator(0);

		this.projectsService.uploadFile(files).subscribe(res => {
			console.log(res);

		})

	}

	/**
	 * format bytes
	 * @param bytes (File size in bytes)
	 * @param decimals (Decimals point)
	 */
	formatBytes(bytes, decimals) {
		if (bytes === 0) {
			return '0 Bytes';
		}
		const k = 1024;
		const dm = decimals <= 0 ? 0 : decimals || 2;
		const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
		const i = Math.floor(Math.log(bytes) / Math.log(k));
		return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
	}



	onGetData() {
		this.backInfo = true;
		this.projectsService.getUserData().subscribe(res => {
			// console.log(res);
		});
	}

	onUpdate(profileFormGroup) {

		let newProjectData = JSON.parse(localStorage.getItem('newProjectData'));

		if (newProjectData != null) {
			this.projectsService.UpdateData(this.profileForm).subscribe(res => {
				// console.log(res);
			})
		}

	}

	onFinish() {
		this.router.navigate(['/home-page/manage-project']);
	}

}
