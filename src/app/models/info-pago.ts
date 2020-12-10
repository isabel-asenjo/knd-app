import { MetodoPago } from './metodo-pago';

export interface InfoPago {
    $key?: string;
    metodosPago: Array<MetodoPago>;
    detalle: string;
}
