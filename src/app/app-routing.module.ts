import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
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
import { ShopPageComponent } from './pages/shop-page/shop-page.component';
import { AuthGuard } from './guards/auth.guard';
import { CheckoutPageComponent } from './pages/checkout-page/checkout-page.component';
import { CheckoutPagePagoComponent } from './pages/checkout-page-pago/checkout-page-pago.component';
import { ProdDeetsComponent } from './pages/prod-deets/prod-deets.component';



const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'shop', component: ShopPageComponent },
  { path: 'shop/:productId', component: ProdDeetsComponent },
  { path: 'checkout', canActivate: [AuthGuard], component: CheckoutPageComponent },
  { path: 'checkout-pago', canActivate: [AuthGuard], component: CheckoutPagePagoComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'admin', canActivate: [AuthGuard], component: AdminMainPageComponent },
  { path: 'admin-cruds', canActivate: [AuthGuard], component: AdminCrudsComponent },
  { path: 'admin-cruds/product/create', canActivate: [AuthGuard], component: CrudCreateComponent },
  { path: 'admin-cruds/product/read', canActivate: [AuthGuard], component: CrudReadComponent },
  { path: 'admin-cruds/product/update', canActivate: [AuthGuard], component: CrudUpdateComponent },
  { path: 'admin-cruds/product/delete', canActivate: [AuthGuard], component: CrudDeleteComponent },
  { path: 'admin-cruds/product/:productId/update', canActivate: [AuthGuard], component: CrudUpdateFormComponent },
  { path: 'admin-cruds/category/create', canActivate: [AuthGuard], component: CrudCreateCategoryComponent },
  { path: 'admin-cruds/category/update', canActivate: [AuthGuard], component: CrudUpdateCategoryComponent },
  { path: 'admin-cruds/category/:categoryId/update', canActivate: [AuthGuard], component: CrudUpdateFormCategoryComponent },
  { path: 'admin-cruds/category/read', canActivate: [AuthGuard], component: CrudReadCategoryComponent },
  { path: 'admin-cruds/category/delete', canActivate: [AuthGuard], component: CrudDeleteCategoryComponent },
  { path: 'admin-cruds/metodo-envio/create', canActivate: [AuthGuard], component: CrudCreateMetodoEnvioComponent },
  { path: 'admin-cruds/metodo-envio/read', canActivate: [AuthGuard], component: CrudReadMetodoEnvioComponent },
  { path: 'admin-cruds/metodo-envio/update', canActivate: [AuthGuard], component: CrudUpdateMetodoEnvioComponent },
  { path: 'admin-cruds/metodo-envio/:metodoEnvioId/update', canActivate: [AuthGuard], component: CrudUpdateFormMetodoEnvioComponent },
  { path: 'admin-cruds/metodo-envio/delete', canActivate: [AuthGuard], component: CrudDeleteMetodoEnvioComponent },
  { path: 'admin-cruds/metodo-pago/create', canActivate: [AuthGuard], component: CrudCreateMetodoPagoComponent },
  { path: 'admin-cruds/metodo-pago/read', canActivate: [AuthGuard], component: CrudReadMetodoPagoComponent },
  { path: 'admin-cruds/metodo-pago/update', canActivate: [AuthGuard], component: CrudUpdateMetodoPagoComponent },
  { path: 'admin-cruds/metodo-pago/:metodoPagoId/update', canActivate: [AuthGuard], component: CrudUpdateFormMetodoPagoComponent },
  { path: 'admin-cruds/metodo-pago/delete', canActivate: [AuthGuard], component: CrudDeleteMetodoPagoComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
