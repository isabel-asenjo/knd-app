import { Product } from './product';

export interface Wishlist {
    $key?: string;
    productos?: Array<Product>;
}
