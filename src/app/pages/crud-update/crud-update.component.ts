import { Component, OnInit } from '@angular/core';
import { Action, DocumentChangeAction, DocumentSnapshot } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-crud-update',
  templateUrl: './crud-update.component.html',
  styleUrls: ['./crud-update.component.scss']
})
export class CrudUpdateComponent implements OnInit {

  products: Array<Product> = [];
  docId: string;

  product: Product = null;
  constructor(private productService: ProductsService, private route: ActivatedRoute) { 
    this.route.paramMap.subscribe(params => {
      this.docId = params.get('productId');

      if(this.docId){
        this.getProduct(this.docId);
      }
    })
  }
  
  ngOnInit(): void {
    this.getAllProducts();
  }
  
  getProduct(docId: string){
    this.productService.getProduct(docId).subscribe(item => {
      this.product = {
        ...item.payload.data(),
        $key: item.payload['id'],
      }
    })
  }
  
  getAllProducts(): void {
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


}
