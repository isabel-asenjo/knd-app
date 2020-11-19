import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-crud-delete',
  templateUrl: './crud-delete.component.html',
  styleUrls: ['./crud-delete.component.scss']
})
export class CrudDeleteComponent implements OnInit {

  products: Array<Product> = [];
  private productCollection: AngularFirestoreCollection<Product>;
  
  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }  

  getAllProducts(): void {
    this.productService.getAllProducts().subscribe((items) => {
      this.products = items.map(
        (item) =>
          ({
            ...item.payload.doc.data(),
            $key: item.payload.doc.id,
          } as Product)
      )
    });
  }
  
  deleteProduct(productId: string): void {
    this.productService.deleteProduct(productId).then(res =>{}).catch(err=> console.log(err));
  }


}
