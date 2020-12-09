import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
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
import { CrudCreateMetodoEnvioComponent } from './pages/crud-create-metodo-envio/crud-create-metodo-envio.component'
import { CrudReadMetodoEnvioComponent } from './pages/crud-read-metodo-envio/crud-read-metodo-envio.component'
import { CrudUpdateMetodoEnvioComponent } from './pages/crud-update-metodo-envio/crud-update-metodo-envio.component'
import { MetodosEnvioFormComponent } from './components/metodos-envio-form/metodos-envio-form.component'
import { CrudDeleteMetodoEnvioComponent } from './pages/crud-delete-metodo-envio/crud-delete-metodo-envio.component'
import { CrudCreateMetodoPagoComponent } from './pages/crud-create-metodo-pago/crud-create-metodo-pago.component'
import { CrudReadMetodoPagoComponent } from './pages/crud-read-metodo-pago/crud-read-metodo-pago.component'
import { CrudUpdateMetodoPagoComponent } from './pages/crud-update-metodo-pago/crud-update-metodo-pago.component'
import { MetodosPagoFormComponent } from './components/metodos-pago-form/metodos-pago-form.component'
import { MetodosPagoService } from './services/metodos-pago.service';
import { CrudDeleteMetodoPagoComponent } from './pages/crud-delete-metodo-pago/crud-delete-metodo-pago.component'
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { CrudUpdateFormCategoryComponent } from './pages/crud-update-form-category/crud-update-form-category.component';
import { CrudUpdateFormMetodoPagoComponent } from './pages/crud-update-form-metodo-pago/crud-update-form-metodo-pago.component';
import { CrudUpdateFormMetodoEnvioComponent } from './pages/crud-update-form-metodo-envio/crud-update-form-metodo-envio.component';


const routes: Routes = [
  //{ path: '', component: HomePageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'admin', component: AdminMainPageComponent },
  { path: 'admin-cruds', component: AdminCrudsComponent },
  { path: 'admin-cruds/product/create', component: CrudCreateComponent },
  { path: 'admin-cruds/product/read', component: CrudReadComponent },
  { path: 'admin-cruds/product/update', component: CrudUpdateComponent },
  { path: 'admin-cruds/product/delete', component: CrudDeleteComponent },
  { path: 'admin-cruds/product/:productId/update', component: CrudUpdateFormComponent },
  { path: 'admin-cruds/category/create', component: CrudCreateCategoryComponent },
  { path: 'admin-cruds/category/update', component: CrudUpdateCategoryComponent },
  { path: 'admin-cruds/category/:categoryId/update', component: CrudUpdateFormCategoryComponent },
  { path: 'admin-cruds/category/read', component: CrudReadCategoryComponent },
  { path: 'admin-cruds/category/delete', component: CrudDeleteCategoryComponent },
  { path: 'admin-cruds/metodo-envio/create', component: CrudCreateMetodoEnvioComponent },
  { path: 'admin-cruds/metodo-envio/read', component: CrudReadMetodoEnvioComponent },
  { path: 'admin-cruds/metodo-envio/update', component: CrudUpdateMetodoEnvioComponent },
  { path: 'admin-cruds/metodo-envio/:metodoEnvioId/update', component: CrudUpdateFormMetodoEnvioComponent },
  { path: 'admin-cruds/metodo-envio/delete', component: CrudDeleteMetodoEnvioComponent },
  { path: 'admin-cruds/metodo-pago/create', component: CrudCreateMetodoPagoComponent },
  { path: 'admin-cruds/metodo-pago/read', component: CrudReadMetodoPagoComponent },
  { path: 'admin-cruds/metodo-pago/update', component: CrudUpdateMetodoPagoComponent },
  { path: 'admin-cruds/metodo-pago/:metodoPagoId/update', component: CrudUpdateFormMetodoPagoComponent },
  { path: 'admin-cruds/metodo-pago/delete', component: CrudDeleteMetodoPagoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
