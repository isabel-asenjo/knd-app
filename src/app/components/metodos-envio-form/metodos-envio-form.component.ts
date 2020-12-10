import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MetodoEnvio } from 'src/app/models/metodo-envio';
import { MetodosEnvioService } from 'src/app/services/metodos-envio.service';

@Component({
  selector: 'app-metodos-envio-form',
  templateUrl: './metodos-envio-form.component.html',
  styleUrls: ['./metodos-envio-form.component.scss']
})
export class MetodosEnvioFormComponent implements OnInit {

  metodoEnvioForm: FormGroup = null;
  metodosEnvio: Array<MetodoEnvio> = [];


  constructor(private metodosEnvioService: MetodosEnvioService, private fb: FormBuilder, private router: Router, private route: ActivatedRoute) { }

  editMetodoEnvio: MetodoEnvio = null;
  metodoEnvioId: string;

  ngOnInit(): void {
    this.createForm();
    this.getAllMetodosEnvio();
    this.getUrlParams();
  }

  getUrlParams(): void {
    this.route.paramMap.subscribe(params => {
      this.metodoEnvioId = params.get('metodoEnvioId');

      if(this.metodoEnvioId) {
        this.metodosEnvioService.getMetodoEnvio(this.metodoEnvioId).subscribe(item =>{
          this.editMetodoEnvio = {
            ...item.payload.data(),
            $key: item.payload['id'],
          };
      
          this.metodoEnvioForm.patchValue({
            name: this.editMetodoEnvio.name,
            description: this.editMetodoEnvio.description,
            adicional: this.editMetodoEnvio.adicional,
          })
        })
      }
    })
  }

  createForm(): void{
    this.metodoEnvioForm = this.fb.group({
      name: [''],
      description: [''],
      adicional: [''],
    })
  }

  pathFormValues(): void{
    this.metodoEnvioForm.patchValue({
      name: this.editMetodoEnvio.name,
      description: this.editMetodoEnvio.description,
      adicional: this.editMetodoEnvio.adicional,
    })
  }
  
  createMetodoEnvio(newMetodoEnvio: MetodoEnvio): void{
    this.metodosEnvioService.createMetodoEnvio(newMetodoEnvio).then(res =>{
       this.router.navigate(['/admin-cruds/metodo-envio/read']);
    }).catch(err => console.log(err));
  }
  
  onSubmit():void{
    const newMetodoEnvio: MetodoEnvio = {
      name: this.metodoEnvioForm.get('name').value,
      description: this.metodoEnvioForm.get('description').value,
      adicional: this.metodoEnvioForm.get('adicional').value,
    }


    if ((newMetodoEnvio.name != "") && (newMetodoEnvio.description != "")){

      if (this.editMetodoEnvio) {
        var rep = 0;
        for (var p of this.metodosEnvio){
          if (p.name == newMetodoEnvio.name){
            rep+=1
            if (rep == 2){
              alert("Ya existe un método de envío con este nombre en su base de datos.");
              return;
            }
          }
          
        }
        this.updateMetodoEnvio(newMetodoEnvio);
        return;
      }
  
      for (var p of this.metodosEnvio){
        if (p.name == newMetodoEnvio.name){
          alert("Ya existe un método de envío con este nombre en su base de datos.");
          return;
        }
      }
      this.createMetodoEnvio(newMetodoEnvio);
      return;      
    }

    alert("Ha ingresado algún dato inválido o ha dejado un campo vacío.");
  }


  getAllMetodosEnvio(): void {
    this.metodosEnvioService.getAllMetodosEnvio().subscribe((items) => {
      this.metodosEnvio = items.map(
        (item) =>
          ({
            ...item.payload.doc.data(),
            $key: item.payload.doc['id'],
          } as MetodoEnvio)
      )
    });
  }

  updateMetodoEnvio(data: MetodoEnvio): void {
    this.metodosEnvioService.updateMetodoEnvio(data, this.metodoEnvioId).then((res) => {
      this.router.navigate(['/admin-cruds/metodo-envio/read']);
    });
  }


}
