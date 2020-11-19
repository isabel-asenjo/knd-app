import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import {ControlWarningModalService} from 'src/app/services/control-warning-modal.service';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-delete-warning',
  templateUrl: './delete-warning.component.html',
  styleUrls: ['./delete-warning.component.scss']
})
export class DeleteWarningComponent implements OnInit {
  @Input() public parentData;

  controlWarningModalService = ControlWarningModalService;

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
            $key: item.payload.doc.id,
          } as Product)
      )
    });
  }

  deleteProduct(productId): void{
    this.productService.deleteProduct(productId).then(res =>{}).catch(err=>console.log(err));
  }
}
