import * as React from 'react';
import { ItemResponse } from './ItemResponse';
import authorInfo from './authorInfo';

export class ItemMapped {
  author: string;
  lastname: string;
  item: Item;

  constructor(data: ItemResponse) {
    this.author = authorInfo.author;
    this.lastname = authorInfo.lastname;

    this.item = {
      id: data.id,
      title: data.title,
      price: {
        currency: data.currency_id,
        amount: data.price,
        // decimals: +data.price.toString().split('.')[1], // NOTA: validar parseo de '0.5' a 0.5
        decimals: +data.price % 1 ?? '00'
      },
      picture: data.thumbnail,
      condition: data.condition,
      category_id: data.category_id,
      free_shipping: data.shipping.free_shipping,
      sold_quantity: data.sold_quantity
    };
  }
}

class Item {
  id!: string;
  title!: string;
  price!: Price;
  picture!: string;
  condition!: string;
  category_id!: string;
  free_shipping!: boolean;
  sold_quantity!: number;
}

class Price {
  currency!: string;
  amount!: number;
  decimals!: number;
}
