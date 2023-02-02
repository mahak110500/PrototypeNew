import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  showMore = 'ADMIN'
	hidden: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
		this.hidden = !this.hidden;
		if (this.hidden) {
			this.showMore = 'show less'
		}

		if (!this.hidden) {
			this.showMore = ' show more'
		}
	}

}
