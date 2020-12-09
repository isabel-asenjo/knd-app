import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {ControlWarningModalService} from 'src/app/services/control-warning-modal.service';

@Component({
  selector: 'app-crud-delete',
  templateUrl: './crud-delete.component.html',
  styleUrls: ['./crud-delete.component.scss']
})
export class CrudDeleteComponent implements OnInit {

  products: Array<Product> = [];
  private productCollection: AngularFirestoreCollection<Product>;
  
  constructor(private productService: ProductsService) { }
  controlWarningModalService = ControlWarningModalService;
  display: boolean = false;  
  @Output() onClick = new EventEmitter<any>();

  ngOnInit(): void {
    this.getAllProducts();
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
  
  deleteProduct(productId: string): void {
    this.productService.deleteProduct(productId).then(res =>{}).catch(err=> console.log(err));
  }

  activate(): boolean {
    this.display = true;
    console.log(this.display);
    return this.display;
  }

  click(event) {
    this.onClick.emit(true);
  }
}
