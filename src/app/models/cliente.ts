import { Carrito } from './carrito';
import { Compra } from './compra';
import { Wishlist } from './wishlist';

export interface Cliente {
    $key?: string;
    nombre: string;
    correo: string;
    carrito: Carrito;
    wishlist: Wishlist;
    compras: Array<Compra>;
}
