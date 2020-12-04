import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.scss']
})
export class DeleteProductComponent implements OnInit {

  products: Array<Product> = [];

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
            $key: item.payload.doc['id'],
          } as Product)
      )
    });
  }

  deleteProduct(productId): void{
    this.productService.deleteProduct(productId).then(res =>{}).catch(err=>console.log(err));
  }
}
