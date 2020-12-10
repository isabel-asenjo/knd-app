import { MetodosEnvioFormComponent } from '../components/metodos-envio-form/metodos-envio-form.component';
import { MetodoEnvio } from './metodo-envio';

export interface InfoEnvio {
    $key?: string;
    metodoEnvio: MetodoEnvio;
    direccion: string;
    fechaPickUp: Date; //no se
}
