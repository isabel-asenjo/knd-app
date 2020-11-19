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
import { SimplebarAngularModule } from 'simplebar-angular';


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
//import { HomePageComponent } from './pages/home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavigationComponent,
    FooterComponent,
    AdminMainPageComponent,
    ProductFormComponent,
    //HomePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //HttpModule,
    FormsModule,
    ReactiveFormsModule,
    SimplebarAngularModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
