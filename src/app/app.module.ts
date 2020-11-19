import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Angular Imports
import { FormsModule } from '@angular/forms';
/*import { HttpModule } from '@angular/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatCardModule } from "@angular/material/card";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";*/


// Firebase Imports
/*import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
// Firebase Configuration
import { environment } from 'src/environments/environment';*/


// nuestros components
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { AdminMainPageComponent } from './pages/admin-main-page/admin-main-page.component';
import { AdminCrudsComponent } from './pages/admin-cruds/admin-cruds.component';
import { CrudButtonsComponent } from './components/crud-buttons/crud-buttons.component';
import { ReadComponent } from './components/read/read.component';
import { CrudReadComponent } from './pages/crud-read/crud-read.component';
import { CrudCreateComponent } from './pages/crud-create/crud-create.component';
import { CrudUpdateComponent } from './pages/crud-update/crud-update.component';
import { CrudDeleteComponent } from './pages/crud-delete/crud-delete.component';
import { DeleteWarningComponent } from './components/delete-warning/delete-warning.component';
//import { HomePageComponent } from './pages/home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavigationComponent,
    FooterComponent,
    AdminMainPageComponent,
    AdminCrudsComponent,
    CrudButtonsComponent,
    ReadComponent,
    CrudReadComponent,
    CrudCreateComponent,
    CrudUpdateComponent,
    CrudDeleteComponent,
    DeleteWarningComponent,
    //HomePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //HttpModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
