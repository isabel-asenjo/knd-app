import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';
import { AdminMainPageComponent } from 'src/app/pages/admin-main-page/admin-main-page.component';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  products: Array<Product> = [];
  crudT='';

  constructor(private productService: ProductsService,private adminMainPageComponent: AdminMainPageComponent) { }

  ngOnInit(): void {
    this.getAllProducts();
    console.log(this.adminMainPageComponent.crudType);
    this.crudT = this.adminMainPageComponent.crudType;
    console.log(this.crudT);
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
