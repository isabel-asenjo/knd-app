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
  { path: 'admin-cruds/create-metodo-envio', component: CrudCreateMetodoEnvioComponent },
  { path: 'admin-cruds/read-metodo-envio', component: CrudReadMetodoEnvioComponent },
  { path: 'admin-cruds/update-metodo-envio', component: CrudUpdateMetodoEnvioComponent },
  { path: 'admin-cruds/:metodoEnvioId/update-metodo-envio', component: MetodosEnvioFormComponent },
  { path: 'admin-cruds/delete-metodo-envio', component: CrudDeleteMetodoEnvioComponent },
  { path: 'admin-cruds/create-metodo-pago', component: CrudCreateMetodoPagoComponent },
  { path: 'admin-cruds/read-metodo-pago', component: CrudReadMetodoPagoComponent },
  { path: 'admin-cruds/update-metodo-pago', component: CrudUpdateMetodoPagoComponent },
  { path: 'admin-cruds/:metodoPagoId/update-metodo-pago', component: MetodosPagoFormComponent },
  { path: 'admin-cruds/delete-metodo-pago', component: CrudDeleteMetodoPagoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
