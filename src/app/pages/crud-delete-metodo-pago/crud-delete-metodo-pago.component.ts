import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { MetodoPago } from 'src/app/models/metodo-pago';
import { MetodosPagoService } from 'src/app/services/metodos-pago.service';

@Component({
  selector: 'app-crud-delete-metodo-pago',
  templateUrl: './crud-delete-metodo-pago.component.html',
  styleUrls: ['./crud-delete-metodo-pago.component.scss']
})
export class CrudDeleteMetodoPagoComponent implements OnInit {

  metodosPago: Array<MetodoPago> = [];
  private metodoPagoCollection: AngularFirestoreCollection<MetodoPago>;
  constructor(private metodoPagoService: MetodosPagoService) { }
  display: boolean = false;  
  @Output() onClick = new EventEmitter<any>();

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

  deleteMetodoPago(metodoPagoId): void{
    this.metodoPagoService.deleteMetodoPago(metodoPagoId).then(res =>{}).catch(err=>console.log(err));
    alert("Se ha eliminado el método de pago exitosamente.");
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
