import { Product } from './product';

export interface Category {
    $key?: string;
    name: string;
    description: string;
    products: Array<Product>;
}
