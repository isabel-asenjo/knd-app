import { Component, OnInit } from '@angular/core';
import { RouterLinkActive } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-admin-main-page',
  templateUrl: './admin-main-page.component.html',
  styleUrls: ['./admin-main-page.component.scss']
})
export class AdminMainPageComponent implements OnInit {
  options = { autoHide: false, scrollbarMinSize: 100 };

  products: Array<Product> = [];
  
  constructor(private productService: ProductsService) { }
  numbers: Array<number>= [1,2,3,4];

  ngOnInit(): void {
    this.getAllProducts();
  }
  
  getAllProducts(): void{
    this.productService.getAllProducts().subscribe((items) => {
      this.products = items.map(
        (item) => 
          ({
            ...item.payload.doc.data(),
            $key: item.payload.doc['id'],
          }as Product)
      )
    });
  }

  deleteProduct(productId): void{
    this.productService.deleteProduct(productId).then(res =>{}).catch(err=>console.log(err));
  }

}
