import { Component, OnInit } from '@angular/core';
import { Bolsa } from 'src/app/models/bolsa';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {

  bolsas: Array<Bolsa>;

  constructor() { }

  ngOnInit(): void {
  }

}
