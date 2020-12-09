import { Component, OnInit } from '@angular/core';
import { MetodoEnvio } from 'src/app/models/metodo-envio';
import { MetodosEnvioService } from 'src/app/services/metodos-envio.service';

@Component({
  selector: 'app-update-metodo-envio',
  templateUrl: './update-metodo-envio.component.html',
  styleUrls: ['./update-metodo-envio.component.scss']
})
export class UpdateMetodoEnvioComponent implements OnInit {

  metodosEnvio: Array<MetodoEnvio> = [];

  constructor(private metodoEnvioService: MetodosEnvioService) { }

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

}
