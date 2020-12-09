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
import { CategoryFormComponent } from './components/category-form/category-form.component';
import { CrudCreateCategoryComponent } from './pages/crud-create-category/crud-create-category.component';
import { CrudUpdateCategoryComponent } from './pages/crud-update-category/crud-update-category.component';
import { UpdateCategoryComponent } from './components/update-category/update-category.component';
import { CrudReadCategoryComponent } from './pages/crud-read-category/crud-read-category.component';
import { CrudDeleteCategoryComponent } from './pages/crud-delete-category/crud-delete-category.component';
//import { HomePageComponent } from './pages/home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavigationComponent,
    FooterComponent,
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
    CategoryFormComponent,
    CrudCreateCategoryComponent,
    CrudUpdateCategoryComponent,
    UpdateCategoryComponent,
    CrudReadCategoryComponent,
    CrudDeleteCategoryComponent,
    //HomePageComponent,
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
