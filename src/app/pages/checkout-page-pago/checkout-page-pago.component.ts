import { Component, OnInit } from '@angular/core';
import { MetodoPago } from 'src/app/models/metodo-pago';
import { MetodosPagoService } from 'src/app/services/metodos-pago.service';

@Component({
  selector: 'app-checkout-page-pago',
  templateUrl: './checkout-page-pago.component.html',
  styleUrls: ['./checkout-page-pago.component.scss']
})
export class CheckoutPagePagoComponent implements OnInit {

  metodosPago: Array<MetodoPago> = [];

  constructor(private metodoPagoService: MetodosPagoService) { }

  ngOnInit(): void {
    this.getAllMetodosPago();
  }

  getAllMetodosPago(): void {
    this.metodoPagoService.getAllMetodosPago().subscribe((items) => {
      this.metodosPago = items.map(
        (item) =>
          ({
            ...item.payload.doc.data(),
            $key: item.payload.doc['id'],
          } as MetodoPago)
      )
    });
  }

}
