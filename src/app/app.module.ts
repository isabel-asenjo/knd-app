import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Angular Imports
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
/*import { HttpModule } from '@angular/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatCardModule } from "@angular/material/card";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";*/


// Firebase Imports
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorage, AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
// Firebase Configuration
import { environment } from 'src/environments/environment';


// nuestros components
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { AdminMainPageComponent } from './pages/admin-main-page/admin-main-page.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { AdminCrudsComponent } from './pages/admin-cruds/admin-cruds.component';
import { CrudButtonsComponent } from './components/crud-buttons/crud-buttons.component';
import { ReadComponent } from './components/read/read.component';
import { CrudReadComponent } from './pages/crud-read/crud-read.component';
import { CrudCreateComponent } from './pages/crud-create/crud-create.component';
import { CrudUpdateComponent } from './pages/crud-update/crud-update.component';
import { CrudDeleteComponent } from './pages/crud-delete/crud-delete.component';
import { DeleteProductComponent } from './components/delete-product/delete-product.component';
//import { SimplebarAngularModule } from 'simplebar-angular/lib/simplebar-angular.module';
import { DeleteWarningComponent } from './components/delete-warning/delete-warning.component';
import { CrudUpdateFormComponent } from './pages/crud-update-form/crud-update-form.component';
import { UpdateComponent } from './components/update/update.component';
import { ImageUploadComponent } from './components/image-upload/image-upload.component';
import { CategoryFormComponent } from './components/category-form/category-form.component';
import { CrudCreateCategoryComponent } from './pages/crud-create-category/crud-create-category.component';
import { CrudUpdateCategoryComponent } from './pages/crud-update-category/crud-update-category.component';
import { UpdateCategoryComponent } from './components/update-category/update-category.component';
import { CrudReadCategoryComponent } from './pages/crud-read-category/crud-read-category.component';
import { CrudDeleteCategoryComponent } from './pages/crud-delete-category/crud-delete-category.component';
import { MetodosEnvioFormComponent } from './components/metodos-envio-form/metodos-envio-form.component';
import { CrudCreateMetodoEnvioComponent } from './pages/crud-create-metodo-envio/crud-create-metodo-envio.component';
import { CrudReadMetodoEnvioComponent } from './pages/crud-read-metodo-envio/crud-read-metodo-envio.component';
import { CrudUpdateMetodoEnvioComponent } from './pages/crud-update-metodo-envio/crud-update-metodo-envio.component';
import { UpdateMetodoEnvioComponent } from './components/update-metodo-envio/update-metodo-envio.component';
import { CrudDeleteMetodoEnvioComponent } from './pages/crud-delete-metodo-envio/crud-delete-metodo-envio.component';
import { MetodosPagoFormComponent } from './components/metodos-pago-form/metodos-pago-form.component';
import { CrudCreateMetodoPagoComponent } from './pages/crud-create-metodo-pago/crud-create-metodo-pago.component';
import { CrudReadMetodoPagoComponent } from './pages/crud-read-metodo-pago/crud-read-metodo-pago.component';
import { CrudUpdateMetodoPagoComponent } from './pages/crud-update-metodo-pago/crud-update-metodo-pago.component';
import { UpdateMetodoPagoComponent } from './components/update-metodo-pago/update-metodo-pago.component';
import { CrudDeleteMetodoPagoComponent } from './pages/crud-delete-metodo-pago/crud-delete-metodo-pago.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { MapComponent } from './components/map/map.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ImageUploadService } from "./services/image-upload.service";
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { CrudUpdateFormCategoryComponent } from './pages/crud-update-form-category/crud-update-form-category.component';
import { CrudUpdateFormMetodoPagoComponent } from './pages/crud-update-form-metodo-pago/crud-update-form-metodo-pago.component';
import { CrudUpdateFormMetodoEnvioComponent } from './pages/crud-update-form-metodo-envio/crud-update-form-metodo-envio.component';
import { ShopPageComponent } from './pages/shop-page/shop-page.component';
import { FilterByNamePipe } from './pipes/filter-by-name.pipe';
import { CheckoutPageComponent } from './pages/checkout-page/checkout-page.component';
import { CheckoutPagePagoComponent } from './pages/checkout-page-pago/checkout-page-pago.component';
import { ProdDeetsComponent } from './pages/prod-deets/prod-deets.component';
import { DeetsComponent } from './components/deets/deets.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavigationComponent,
    FooterComponent,
    HomePageComponent,
    AdminMainPageComponent,
    ProductFormComponent,
    AdminCrudsComponent,
    CrudButtonsComponent,
    ReadComponent,
    CrudReadComponent,
    CrudCreateComponent,
    CrudUpdateComponent,
    CrudDeleteComponent,
    DeleteProductComponent,
    DeleteWarningComponent,
    CrudUpdateFormComponent,
    UpdateComponent,
    ImageUploadComponent,
    CategoryFormComponent,
    CrudCreateCategoryComponent,
    CrudUpdateCategoryComponent,
    UpdateCategoryComponent,
    CrudReadCategoryComponent,
    CrudDeleteCategoryComponent,
    MetodosEnvioFormComponent,
    CrudCreateMetodoEnvioComponent,
    CrudReadMetodoEnvioComponent,
    CrudUpdateMetodoEnvioComponent,
    UpdateMetodoEnvioComponent,
    CrudDeleteMetodoEnvioComponent,
    MetodosPagoFormComponent,
    CrudCreateMetodoPagoComponent,
    CrudReadMetodoPagoComponent,
    CrudUpdateMetodoPagoComponent,
    UpdateMetodoPagoComponent,
    CrudDeleteMetodoPagoComponent,
    AboutPageComponent,
    ContactPageComponent,
    MapComponent,
    LoginPageComponent,
    CrudUpdateFormCategoryComponent,
    CrudUpdateFormMetodoPagoComponent,
    CrudUpdateFormMetodoEnvioComponent,
    ShopPageComponent,
    FilterByNamePipe,
    CheckoutPageComponent,
    CheckoutPagePagoComponent,
    ProdDeetsComponent,
    DeetsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //HttpModule,
    FormsModule,
    ReactiveFormsModule,
    //SimplebarAngularModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  providers: [AdminMainPageComponent,ImageUploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
