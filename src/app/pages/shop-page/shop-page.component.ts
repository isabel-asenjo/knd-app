import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductsService} from 'src/app/services/products.service';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatCardModule } from "@angular/material/card";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'firebase';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';
import { Bolsa } from 'src/app/models/bolsa';
import { BolsaService } from 'src/app/services/bolsa.service';



@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.scss']
})
export class ShopPageComponent implements OnInit {
  products: Array<Product> = [];
  singleProd: Product = null;
  productId: string;
  isAuthenticated = false;
  user: User = null;
  client: Cliente = null;
  clientes: Array<Cliente> = [];
  bags: Array<Bolsa>;

  constructor(private clienteService : ClienteService, private bolsaService : BolsaService, private productService : ProductsService, private router: Router, private route: ActivatedRoute, private authService: AuthService) { }
  filterByName = '';
  p: number = 1;

  ngOnInit(): void {
    this.getProducts();
    this.getCurrentUser();
    this.getClientes();
    console.log(this.clientes);
    this.getActualClient();
  }


  getProducts(): void {
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


  showDeets(prodId: string, prod: Product): void{
    this.productService.getProduct(prod.$key).subscribe(item =>{
      this.singleProd = item.payload.data();
      $key: item.payload["id"],
      
      this.router.navigate(['products/:prodId']);
      return this.singleProd;
    })
    
  }



  getUrlParams(): void {
    this.route.paramMap.subscribe(params => {
      this.productId = params.get('prodId');

      if(this.productId) {
        this.productService.getProduct(this.productId).subscribe(item =>{
          this.singleProd = {
            ...item.payload.data(),
            $key: item.payload["id"],
          };
              
        })
      }
    })
  }


  getCurrentUser(): void {
    this.authService.getCurrentUser().subscribe(response => {
      if (response) {
        this.isAuthenticated = true;
        this.user = response;
        return;
      }

      this.isAuthenticated = false;
      this.user = null;
    });
  }


  getClientes(): void {
    console.log("running");
    this.clienteService.getAllClientes().subscribe((items) => {
      this.clientes = items.map(
        (item) =>
          ({
            ...item.payload.doc.data(),
            $key: item.payload.doc['id'],
          } as Cliente)
      )
    });
  }

  getActualClient(): void{
    console.log("clientes",this.clientes);
    console.log("email",this.user.email);
    for (var c of this.clientes){
      console.log(c.correo);
      if (c.correo == this.user.email){
        this.client = c;
        this.bags = this.client.bolsas;
        console.log(this.bags);
      }
    }
  }

}
