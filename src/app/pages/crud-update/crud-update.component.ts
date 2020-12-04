import { Component, OnInit } from '@angular/core';
import { Action, DocumentChangeAction, DocumentSnapshot } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';
import { Router,NavigationEnd  } from '@angular/router';
import { AdminMainPageComponent } from 'src/app/pages/admin-main-page/admin-main-page.component';

@Component({
  selector: 'app-crud-update',
  templateUrl: './crud-update.component.html',
  styleUrls: ['./crud-update.component.scss']
})
export class CrudUpdateComponent implements OnInit {

  products: Array<Product> = [];
  docId: string;
  crudT='';

  product: Product = null;
  constructor(private productService: ProductsService, private route: ActivatedRoute, private adminMainPageComponent: AdminMainPageComponent) { 
    this.route.paramMap.subscribe(params => {
      this.docId = params.get('productId');

      if(this.docId){
        this.getProduct(this.docId);
      }
    })
  }
  
  ngOnInit(): void {
    this.getAllProducts();
    console.log(this.adminMainPageComponent.crudType);
    this.crudT = this.adminMainPageComponent.crudType;
    console.log(this.crudT);
  }
  
  getProduct(docId: string){
    this.productService.getProduct(docId).subscribe(item => {
      this.product = {
        ...item.payload.data(),
        $key: item.payload["id"],
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
