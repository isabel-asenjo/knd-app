import { NullTemplateVisitor } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'firebase';
import { Carrito } from 'src/app/models/carrito';
import { Cliente } from 'src/app/models/cliente';
import { AuthService } from 'src/app/services/auth.service';
import { BolsaService } from 'src/app/services/bolsa.service';
import { CarritoService } from 'src/app/services/carrito.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { Wishlist } from 'src/app/models/wishlist';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isAuthenticated = false;
  user: User = null;
  cliente: Cliente = null;
  clientes: Array<Cliente>;

  constructor(private authService: AuthService, private clienteService : ClienteService,private carritoService : CarritoService, private bolsaService : BolsaService, private router: Router) { }

  ngOnInit(): void {
    this.getCurrentUser();
    console.log(this.isAuthenticated);
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

  loginWithGoogle(): void{
    this.authService.loginWithGoogle().then(response => {
      console.log(this.isAuthenticated);
    })
  }

  logout(): void{
    this.authService.logout().then(() =>{
      this.router.navigate(['/']);
      console.log(this.isAuthenticated);
    })
  }


  createClient(): void{
    var registered = false;
    for (var c of this.clientes){
      if (c.correo == this.user.email){
        registered = true;
      }
    }

    if (!registered){

      const newCarrito: Carrito={
        bolsas: [],
      }


      const newCliente: Cliente = {
        nombre: this.user.displayName,
        correo: this.user.email,
        bolsas: [],
        compras: null,
        wishlist: null,
      }
  
      this.clienteService.createCliente(newCliente);
    }
    
  }


  getClientes(): void {
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

}
