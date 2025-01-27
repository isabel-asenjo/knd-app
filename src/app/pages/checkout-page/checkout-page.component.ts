import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { InfoEnvio } from 'src/app/models/info-envio';
import { MetodoEnvio } from 'src/app/models/metodo-envio';
import { InfoEnvioService } from 'src/app/services/info-envio.service';
import { MetodosEnvioService } from 'src/app/services/metodos-envio.service';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss']
})
export class CheckoutPageComponent implements OnInit {

  metodosEnvio: Array<MetodoEnvio> = [];
  infoEnvios: Array<InfoEnvio> = [];
  infoEnvioForm: FormGroup = null;
  editInfoEnvio: InfoEnvio = null;
  infoEnvioId: string;

  constructor(private metodoEnvioService: MetodosEnvioService, private infoEnvioService: InfoEnvioService, private fb: FormBuilder, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.createForm();
    this.getAllInfoEnvio();
    this.getUrlParams();
  }

  getUrlParams(): void {
    this.route.paramMap.subscribe(params => {
      this.infoEnvioId = params.get('infoEnvioId');

      if(this.infoEnvioId) {
        this.infoEnvioService.getInfoEnvio(this.infoEnvioId).subscribe(item =>{
          this.editInfoEnvio = {
            ...item.payload.data(),
            $key: item.payload['id'],
          };
      
          this.infoEnvioForm.patchValue({
            direccion: this.editInfoEnvio.direccion,
            fechaPickUp: this.editInfoEnvio.fechaPickUp,
          })
        })
      }
    })
  }

  createForm(): void{
    this.infoEnvioForm = this.fb.group({
      direccion: [''],
      fechaPickUp: [''],
    })
  }

  pathFormValues(): void{
    this.infoEnvioForm.patchValue({
      direccion: this.editInfoEnvio.direccion,
      fechaPickUp: this.editInfoEnvio.fechaPickUp,
    })
  }

  createInfoEnvio(newInfoEnvio: InfoEnvio): void{
    this.infoEnvioService.createInfoEnvio(newInfoEnvio).then(res =>{
       this.router.navigate(['/checkout-pago']);
    }).catch(err => console.log(err));
  }

  getAllInfoEnvio(): void {
    this.infoEnvioService.getAllInfoEnvio().subscribe((items) => {
      this.infoEnvios = items.map(
        (item) =>
          ({
            ...item.payload.doc.data(),
            $key: item.payload.doc['id'],
          } as InfoEnvio)
      )
    });
  }

  updateInfoEnvio(data: InfoEnvio): void {
    this.infoEnvioService.updateInfoEnvio(data, this.infoEnvioId).then((res) => {
      this.router.navigate(['/checkout-pago']); // modificar esto
    });
  }

  onSubmit():void{
    const newInfoEnvio: InfoEnvio = {
      metodoEnvio: this.infoEnvioForm.get('').value,
      direccion: this.infoEnvioForm.get('direccion').value, 
      fechaPickUp: this.infoEnvioForm.get('fechaPickUp').value, 
    }
    this.updateInfoEnvio(newInfoEnvio);
    return;
  }

}
