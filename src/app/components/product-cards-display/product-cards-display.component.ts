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


  constructor(private productService : ProductsService, private router: Router, private route: ActivatedRoute) { }


  ngOnInit(): void {
  }
}




