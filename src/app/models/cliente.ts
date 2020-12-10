import { Bolsa } from './bolsa';
import { Carrito } from './carrito';
import { Compra } from './compra';
import { Wishlist } from './wishlist';

export interface Cliente {
    $key?: string;
    nombre: string;
    correo: string;
    bolsas: Array<Bolsa>;
    wishlist: Wishlist;
    compras: Array<Compra>;
}
