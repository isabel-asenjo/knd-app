import { Bolsa } from './bolsa';
import { InfoPago } from './info-pago';
import { InfoEnvio } from './info-envio';

export interface Compra {
    $key?: string;
    clientId: string;
    estatus: string;
    infoEnvio: InfoEnvio;
    infoPago: InfoPago;
    total: number;
    bolsas: Array<Bolsa>;
}
