import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-main-page',
  templateUrl: './admin-main-page.component.html',
  styleUrls: ['./admin-main-page.component.scss']
})
export class AdminMainPageComponent implements OnInit {
  options = { autoHide: false, scrollbarMinSize: 100 };

  constructor() { }
  numbers: Array<number>= [1,2,3,4,5,6,7,8,9,0,1,1,2,32,4,4,2,4,2,4,2,4,2,4,2,3,2];

  ngOnInit(): void {
  }

}
