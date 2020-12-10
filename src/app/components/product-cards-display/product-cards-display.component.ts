import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductsService} from 'src/app/services/products.service';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatCardModule } from "@angular/material/card";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-cards-display',
  templateUrl: './product-cards-display.component.html',
  styleUrls: ['./product-cards-display.component.scss']
})
export class ProductCardsDisplayComponent implements OnInit {
  products: Array<Product> = [];
  singleProd: Product = null;
  productId: string;


  constructor(private productService : ProductsService, private router: Router, private route: ActivatedRoute) { }
  
  filterProd = '';
  p: number = 1;

  ngOnInit(): void {
    this.getProducts();
  }

  
  getProducts(): void {
    this.productService.getAllProducts().subscribe((items) => {
      this.products = items.map(
        (item) =>
          ({
            ...item.payload.doc.data(),
            $key: item.payload.doc['id'],
          } as Product)
      )
    });
  }


  showDeets(prodId: string): void{
    this.productService.getProduct(prodId).subscribe(item =>{
      this.singleProd = item.payload.data();
      $key: item.payload["id"],
      
      this.router.navigate(['products/:this.prodId']);
      return this.singleProd;
    })
    
  }



  getUrlParams(): void {
    this.route.paramMap.subscribe(params => {
      this.productId = params.get('prodId');

      if(this.productId) {
        this.productService.getProduct(this.productId).subscribe(item =>{
          this.singleProd = {
            ...item.payload.data(),
            $key: item.payload["id"],
          };
              
        })
      }
    })
  }

}




