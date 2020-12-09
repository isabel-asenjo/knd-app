import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { HomePageComponent } from './pages/home-page/home-page.component';
//import { AboutUsComponent } from './pages/about-us/about-us.component';
import { AdminMainPageComponent } from './pages/admin-main-page/admin-main-page.component';
import { AdminCrudsComponent } from './pages/admin-cruds/admin-cruds.component';
import { CrudReadComponent } from './pages/crud-read/crud-read.component';
import { CrudCreateComponent } from './pages/crud-create/crud-create.component';
import { CrudUpdateComponent } from './pages/crud-update/crud-update.component';
import { CrudDeleteComponent } from './pages/crud-delete/crud-delete.component';
import { CrudUpdateFormComponent } from './pages/crud-update-form/crud-update-form.component';
import { CrudCreateCategoryComponent } from './pages/crud-create-category/crud-create-category.component'
import { CrudUpdateCategoryComponent } from './pages/crud-update-category/crud-update-category.component'
import { UpdateCategoryComponent } from './components/update-category/update-category.component';
import { CategoryFormComponent } from './components/category-form/category-form.component';
import { CrudReadCategoryComponent } from './pages/crud-read-category/crud-read-category.component'
import { CrudDeleteCategoryComponent } from './pages/crud-delete-category/crud-delete-category.component'



const routes: Routes = [
  //{ path: '', component: HomePageComponent },
  //  { path: 'about', component: AboutUsComponent },
  { path: 'admin', component: AdminMainPageComponent },
  { path: 'admin-cruds', component: AdminCrudsComponent },
  { path: 'admin-cruds/create', component: CrudCreateComponent },
  { path: 'admin-cruds/read', component: CrudReadComponent },
  { path: 'admin-cruds/update', component: CrudUpdateComponent },
  { path: 'admin-cruds/delete', component: CrudDeleteComponent },
  { path: 'admin-cruds/:productId/update', component: CrudUpdateFormComponent },
  { path: 'admin-cruds/create-category', component: CrudCreateCategoryComponent },
  { path: 'admin-cruds/update-category', component: CrudUpdateCategoryComponent },
  { path: 'admin-cruds/:categoryId/update-category', component: CategoryFormComponent },
  { path: 'admin-cruds/read-category', component: CrudReadCategoryComponent },
  { path: 'admin-cruds/delete-category', component: CrudDeleteCategoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
