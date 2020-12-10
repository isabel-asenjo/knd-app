import { Item } from './item';

export interface Bolsa {
    $key?: string;
    items: Array<Item>;
    precio: number;
}
