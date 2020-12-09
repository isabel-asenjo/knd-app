import { Component, OnInit } from '@angular/core';
import { Router,NavigationEnd,ActivatedRoute  } from '@angular/router';
import { AdminMainPageComponent } from 'src/app/pages/admin-main-page/admin-main-page.component';

@Component({
  selector: 'app-crud-create',
  templateUrl: './crud-create.component.html',
  styleUrls: ['./crud-create.component.scss']
})
export class CrudCreateComponent implements OnInit {

  crudT='';
  currentRoute="";

  constructor(private router: Router, private adminMainPageComponent: AdminMainPageComponent, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.currentRoute = this.router.url;
    console.log(this.adminMainPageComponent.crudType);
    this.crudT = this.adminMainPageComponent.crudType;
    console.log(this.crudT);
    console.log(this.router.url);
  }

}
