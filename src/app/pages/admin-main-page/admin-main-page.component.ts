import { Component, OnInit } from '@angular/core';
import { RouterLinkActive } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';
import { CompraService } from 'src/app/services/compra.service';
import { Compra } from 'src/app/models/compra';

@Component({
  selector: 'app-admin-main-page',
  templateUrl: './admin-main-page.component.html',
  styleUrls: ['./admin-main-page.component.scss']
})
export class AdminMainPageComponent implements OnInit {
  options = { autoHide: false, scrollbarMinSize: 100 };

  products: Array<Product> = [];
  compras: Array<Compra> = [];
  
  constructor(private productService: ProductsService, private compraService: CompraService) { }

  ngOnInit(): void {
    this.getAllProducts();
    this.getAllCompras();
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


  getAllCompras(): void{
    this.compraService.getAllCompras().subscribe((items) => {
      this.compras = items.map(
        (item) => 
          ({
            ...item.payload.doc.data(),
            $key: item.payload.doc['id'],
          }as Compra)
      )
    });
  }


  deleteProduct(productId): void{
    this.productService.deleteProduct(productId).then(res =>{}).catch(err=>console.log(err));
  }

}
