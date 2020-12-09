import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MetodoPago } from 'src/app/models/metodo-pago';
import { MetodosPagoService } from 'src/app/services/metodos-pago.service';

@Component({
  selector: 'app-metodos-pago-form',
  templateUrl: './metodos-pago-form.component.html',
  styleUrls: ['./metodos-pago-form.component.scss']
})
export class MetodosPagoFormComponent implements OnInit {

  metodoPagoForm: FormGroup = null;

  constructor(private metodosPagoService: MetodosPagoService, private fb: FormBuilder, private router: Router, private route: ActivatedRoute) { }

  editMetodoPago: MetodoPago = null;
  metodoPagoId: string;

  ngOnInit(): void {
    this.createForm();

    this.getUrlParams();
  }

  getUrlParams(): void {
    this.route.paramMap.subscribe(params => {
      this.metodoPagoId = params.get('metodoPagoId');

      if(this.metodoPagoId) {
        this.metodosPagoService.getMetodoPago(this.metodoPagoId).subscribe(item =>{
          this.editMetodoPago = {
            ...item.payload.data(),
            $key: item.payload['id'],
          };
      
          this.metodoPagoForm.patchValue({
            name: this.editMetodoPago.name,
            description: this.editMetodoPago.description,
            adicional: this.editMetodoPago.adicional,
          })
        })
      }
    })
  }

  createForm(): void{
    this.metodoPagoForm = this.fb.group({
      name: [''],
      description: [''],
      adicional: [''],
    })
  }

  pathFormValues(): void{
    this.metodoPagoForm.patchValue({
      name: this.editMetodoPago.name,
      description: this.editMetodoPago.description,
      adicional: this.editMetodoPago.adicional,
    })
  }
  
  createMetodoPago(newMetodoPago: MetodoPago): void{
    this.metodosPagoService.createMetodoPago(newMetodoPago).then(res =>{
       this.router.navigate(['/admin-cruds/metodo-pago/read']);
    }).catch(err => console.log(err));
  }
  
  onSubmit():void{
    const newMetodoPago: MetodoPago = {
      name: this.metodoPagoForm.get('name').value,
      description: this.metodoPagoForm.get('description').value,
      adicional: this.metodoPagoForm.get('adicional').value,
    }

    this.createMetodoPago(newMetodoPago);
  }

}
