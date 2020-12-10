import { Component, Input, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from "rxjs";
import { ProductsService } from 'src/app/services/products.service';
import { finalize } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-prod-deets',
  templateUrl: './prod-deets.component.html',
  styleUrls: ['./prod-deets.component.scss']
})
export class ProdDeetsComponent implements OnInit {
  @ViewChild('imageProd',{static:true}) inputImageProd: ElementRef;
  productForm: FormGroup = null;
  products: Array<Product> = [];
  
  constructor(private storage: AngularFireStorage, private productService: ProductsService, private authService: AuthService, private fb: FormBuilder, private router: Router, private route: ActivatedRoute) { }
  editProduct: Product = null;
  productId: string;
  uploadPercent: Observable<number>;
  urlImage: Observable<string>;
  image: '';
  producto: Product = null;
  isAuthenticated = false;


  ngOnInit(): void {
    this.getAllProducts();
    this.getUrlParams();
    this.isAuthenticated = this.authService.isAuthenticated();
    console.log("auth?: ",this.isAuthenticated);
  }


  getUrlParams(): void {
    this.route.paramMap.subscribe(params => {
      this.productId = params.get('productId');

      if(this.productId) {
        this.productService.getProduct(this.productId).subscribe(item =>{
          this.producto = {
            ...item.payload.data(),
            $key: item.payload["id"],
          };
        })
      }
    })
  }


  getAllProducts(): void {
    this.productService.getAllProducts().subscribe((items) => {
      this.products = items.map(
        (item) =>
          ({
            ...item.payload.doc.data(),
            $key: item.payload.doc["id"],
          } as Product)
      )
    });
  }


}
