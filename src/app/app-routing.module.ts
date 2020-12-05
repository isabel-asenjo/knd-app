import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { AdminMainPageComponent } from './pages/admin-main-page/admin-main-page.component';
import { AdminCrudsComponent } from './pages/admin-cruds/admin-cruds.component';
import { CrudReadComponent } from './pages/crud-read/crud-read.component';
import { CrudCreateComponent } from './pages/crud-create/crud-create.component';
import { CrudUpdateComponent } from './pages/crud-update/crud-update.component';
import { CrudDeleteComponent } from './pages/crud-delete/crud-delete.component';
import { CrudUpdateFormComponent } from './pages/crud-update-form/crud-update-form.component';

const routes: Routes = [
  //{ path: '', component: HomePageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'admin', component: AdminMainPageComponent },
  { path: 'admin-cruds', component: AdminCrudsComponent },
  { path: 'admin-cruds/:crudType/create', component: CrudCreateComponent },
  { path: 'admin-cruds/:crudType/read', component: CrudReadComponent },
  { path: 'admin-cruds/:crudType/update', component: CrudUpdateComponent },
  { path: 'admin-cruds/:crudType/delete', component: CrudDeleteComponent },
  { path: 'admin-cruds/:crudType/:productId/update', component: CrudUpdateFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
