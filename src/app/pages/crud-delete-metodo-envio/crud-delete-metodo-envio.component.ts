import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { MetodosEnvioFormComponent } from 'src/app/components/metodos-envio-form/metodos-envio-form.component';
import { MetodoEnvio } from 'src/app/models/metodo-envio';
import { MetodosEnvioService } from 'src/app/services/metodos-envio.service';

@Component({
  selector: 'app-crud-delete-metodo-envio',
  templateUrl: './crud-delete-metodo-envio.component.html',
  styleUrls: ['./crud-delete-metodo-envio.component.scss']
})
export class CrudDeleteMetodoEnvioComponent implements OnInit {

  metodosEnvio: Array<MetodoEnvio> = [];
  private metodoEnvioCollection: AngularFirestoreCollection<MetodoEnvio>;
  constructor(private metodoEnvioService: MetodosEnvioService) { }
  display: boolean = false;  
  @Output() onClick = new EventEmitter<any>();

  ngOnInit(): void {
    this.getAllMetodosEnvio();
  }
  
  getAllMetodosEnvio(): void {
    this.metodoEnvioService.getAllMetodosEnvio().subscribe((items) => {
      this.metodosEnvio = items.map(
        (item) =>
          ({
            ...item.payload.doc.data(),
            $key: item.payload.doc['id'],
          } as MetodoEnvio)
      )
    });
  }

  deleteMetodoEnvio(metodoEnvioId): void{
    this.metodoEnvioService.deleteMetodoEnvio(metodoEnvioId).then(res =>{}).catch(err=>console.log(err));
    alert("Se ha eliminado el método de envío exitosamente.");
  }

  activate(): boolean {
    this.display = true;
    console.log(this.display);
    return this.display;
  }

  click(event) {
    this.onClick.emit(true);
  }

}
