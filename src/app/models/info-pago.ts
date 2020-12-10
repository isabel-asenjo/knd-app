import { MetodoPago } from './metodo-pago';

export interface InfoPago {
    metodosPago: Array<MetodoPago>;
    detalle: string;
}
