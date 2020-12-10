import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { InfoPago } from 'src/app/models/info-pago';
import { MetodoEnvio } from 'src/app/models/metodo-envio';
import { InfoPagoService } from 'src/app/services/info-pago.service';
import { MetodosEnvioService } from 'src/app/services/metodos-envio.service';

@Component({
  selector: 'app-checkout-page-pago-tarjeta',
  templateUrl: './checkout-page-pago-tarjeta.component.html',
  styleUrls: ['./checkout-page-pago-tarjeta.component.scss']
})
export class CheckoutPagePagoTarjetaComponent implements OnInit {

  metodosEnvio: Array<MetodoEnvio> = [];
  infoEnvios: Array<InfoPago> = [];
  infoPagoForm: FormGroup = null;
  editInfoPago: InfoPago = null;
  infoPagoId: string;

  constructor(private metodoEnvioService: MetodosEnvioService, private infoPagoService: InfoPagoService, private fb: FormBuilder, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.createForm();
    this.getAllInfoPago();
    this.getUrlParams();
  }

  getUrlParams(): void {
    this.route.paramMap.subscribe(params => {
      this.infoPagoId = params.get('infoPagoId');

      if(this.infoPagoId) {
        this.infoPagoService.getInfoPago(this.infoPagoId).subscribe(item =>{
          this.editInfoPago = {
            ...item.payload.data(),
            $key: item.payload['id'],
          };
      
          this.infoPagoForm.patchValue({
            detalle: this.editInfoPago.detalle,
          })
        })
      }
    })
  }

  createForm(): void{
    this.infoPagoForm = this.fb.group({
      detalle: [''],
    })
  }

  pathFormValues(): void{
    this.infoPagoForm.patchValue({
      direccion: this.editInfoPago.detalle,
    })
  }

  createInfoPago(newInfoPago: InfoPago): void{
    this.infoPagoService.createInfoPago(newInfoPago).then(res =>{
       this.router.navigate(['/checkout-final']);
    }).catch(err => console.log(err));
  }

  getAllInfoPago(): void {
    this.infoPagoService.getAllInfoPago().subscribe((items) => {
      this.infoEnvios = items.map(
        (item) =>
          ({
            ...item.payload.doc.data(),
            $key: item.payload.doc['id'],
          } as InfoPago)
      )
    });
  }


}
