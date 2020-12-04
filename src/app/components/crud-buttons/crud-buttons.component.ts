import { Component, OnInit } from '@angular/core';
import { Router,NavigationEnd  } from '@angular/router';
import { AdminMainPageComponent } from 'src/app/pages/admin-main-page/admin-main-page.component';

@Component({
  selector: 'app-crud-buttons',
  templateUrl: './crud-buttons.component.html',
  styleUrls: ['./crud-buttons.component.scss']
})
export class CrudButtonsComponent implements OnInit {

  crudT='';

  constructor(private router: Router, private adminMainPageComponent: AdminMainPageComponent) { }

  ngOnInit(): void {
    console.log(this.adminMainPageComponent.crudType);
    this.crudT = this.adminMainPageComponent.crudType;
    console.log(this.crudT);
  }

}
