import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-crud-update-form',
  templateUrl: './crud-update-form.component.html',
  styleUrls: ['./crud-update-form.component.scss']
})
export class CrudUpdateFormComponent implements OnInit {

  product: Product = null;
  docId: string;
  constructor() { }

  ngOnInit(): void {
  }

  //getProduct(docId: string){
  //  this.productService.getProduct(docId).subscribe(item =>{
  //    this.product = {
  //      ...item.payload.data(),
  //      $key: item.payload.id,
  //    }
  //  })
  //}
}