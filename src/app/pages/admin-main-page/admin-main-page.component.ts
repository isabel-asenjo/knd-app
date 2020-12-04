import { Component, OnInit } from '@angular/core';
import { RouterLinkActive } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';
import { MetodosPagoService } from 'src/app/services/metodos-pago.service';
import { MetodosEnvioService } from 'src/app/services/metodos-envio.service';
import { CategoriesService } from 'src/app/services/categories.service';
import { Category } from 'src/app/models/category';
import { MetodoPago } from 'src/app/models/metodo-pago';
import { MetodoEnvio } from 'src/app/models/metodo-envio';

@Component({
  selector: 'app-admin-main-page',
  templateUrl: './admin-main-page.component.html',
  styleUrls: ['./admin-main-page.component.scss']
})
export class AdminMainPageComponent implements OnInit {
  options = { autoHide: false, scrollbarMinSize: 100 };

  products: Array<Product> = [];
  categories: Array<Category> = [];
  metodosPago: Array<MetodoPago> = [];
  metodosEnvio: Array<MetodoEnvio> = [];
  crudType = 'x';
  
  constructor(private productService: ProductsService, private categoryService: CategoriesService, private metodoPagoService: MetodosPagoService, private metodoEnvioService: MetodosEnvioService) { }
  numbers: Array<number>= [1,2,3,4];

  ngOnInit(): void {
    this.getAllProducts();
    this.getAllCategories();
    this.getAllMetodosPago();
    this.getAllMetodosEnvio();
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

  getAllCategories(): void{
    this.categoryService.getAllCategories().subscribe((items) => {
      this.categories = items.map(
        (item) => 
          ({
            ...item.payload.doc.data(),
            $key: item.payload.doc['id'],
          }as Category)
      )
    });
  }

  deleteCategory(categoryId): void{
    this.categoryService.deleteCategory(categoryId).then(res =>{}).catch(err=>console.log(err));
  }

  getAllMetodosPago(): void{
    this.metodoPagoService.getAllMetodosPago().subscribe((items) => {
      this.metodosPago = items.map(
        (item) => 
          ({
            ...item.payload.doc.data(),
            $key: item.payload.doc['id'],
          }as MetodoPago)
      )
    });
  }

  deleteMetodoPago(metodoPagoId): void{
    this.metodoPagoService.deleteMetodoPago(metodoPagoId).then(res =>{}).catch(err=>console.log(err));
  }

  getAllMetodosEnvio(): void{
    this.metodoEnvioService.getAllMetodosEnvio().subscribe((items) => {
      this.metodosEnvio = items.map(
        (item) => 
          ({
            ...item.payload.doc.data(),
            $key: item.payload.doc['id'],
          }as MetodoEnvio)
      )
    });
  }

  deleteMetodoEnvio(metodoEnvioId): void{
    this.metodoEnvioService.deleteMetodoEnvio(metodoEnvioId).then(res =>{}).catch(err=>console.log(err));
  }


  setCrudType(cT): void{
    console.log(this.crudType);
    this.crudType = cT;
    console.log(this.crudType);
  }

}
