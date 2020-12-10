import { Product } from './product';

export interface Item {
    $key?: string;
    producto: Product;
    cantidad: number;
}
