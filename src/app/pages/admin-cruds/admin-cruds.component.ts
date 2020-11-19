import { Component, OnInit } from '@angular/core';
import { Router,NavigationEnd  } from '@angular/router';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-admin-cruds',
  templateUrl: './admin-cruds.component.html',
  styleUrls: ['./admin-cruds.component.scss']
})
export class AdminCrudsComponent implements OnInit {
  currentRoute: string;

  constructor(private router: Router) {
    /*this.router.events.pipe(
      filter((event:Event)  => event instanceof NavigationEnd)
          .subscribe(event => 
           {
              this.currentRoute = event.url;          
              console.log(event);
           }));*/
  }



  ngOnInit(): void {
  }



}
