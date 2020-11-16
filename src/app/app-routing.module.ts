import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { HomePageComponent } from './pages/home-page/home-page.component';
//import { AboutUsComponent } from './pages/about-us/about-us.component';
import { AdminMainPageComponent } from './pages/admin-main-page/admin-main-page.component';

const routes: Routes = [
  //{ path: '', component: HomePageComponent },
  //  { path: 'about', component: AboutUsComponent },
  { path: 'admin', component: AdminMainPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
