export class ItemResponse {
  id!: string;
  title!: string;
  price!: number;
  currency_id!: string;
  thumbnail!: string;
  condition!: string;
  shipping!: Shipping;
  sold_quantity!: number;
}

class Shipping {
  free_shipping!: boolean;
}
