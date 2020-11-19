import { Component, OnInit } from '@angular/core';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-admin-main-page',
  templateUrl: './admin-main-page.component.html',
  styleUrls: ['./admin-main-page.component.scss']
})
export class AdminMainPageComponent implements OnInit {
  options = { autoHide: false, scrollbarMinSize: 100 };

  constructor() { }
  numbers: Array<number>= [1,2,3,4];

  ngOnInit(): void {
    
  }

}
