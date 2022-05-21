import * as React from 'react';
import { SearchResponse, Filter, Result } from './SearchResponse';
import authorInfo from './authorInfo';

export class SearchMapped {
  author: string;
  lastname: string;
  categories: string[];
  items: Item[];

  constructor(data: SearchResponse) {
    this.author = authorInfo.author;
    this.lastname = authorInfo.lastname;
    this.categories = this.getCategories(data.available_filters);
    this.items = this.getItems(data.results);
  }

  getCategories(filters: Filter[]) {
    // filter for category
    const categoriesFilter = filters.find((filter) => filter.id == 'category');

    // create array with name of caterties
    return categoriesFilter!.values.map((categoryList) => {
      return categoryList.name;
    });
  }

  getItems(results: Result[]) {
    return results.map((result) => {
      let item: Item = {
        id: result.id,
        title: result.title,
        price: {
          currency: result.currency_id,
          amount: result.price,
          // decimals: +result.price.toString().split('.')[1], // NOTA: validar parseo de '0.5' a 0.5
          decimals: +result.price % 1 ?? 0
        },
        picture: result.thumbnail,
        condition: result.condition,
        free_shipping: result.shipping.free_shipping,
      };
      return item;
    });

    /*let items: Item[] = [];
    
    let item: Item = {
      id: result.id,
      title: result.title,
      price: {
        currency: result.currency_id,
        amount: result.price,
        decimals: +result.price.toString().split('.')[1],
      },
      picture: result.thumbnail,
      condition: result.condition,
      free_shipping: result.shipping.free_shipping,
    };

    items.push(item);

    return items;*/
  }
}

class Item {
  id!: string;
  title!: string;
  price!: Price;
  picture!: string;
  condition!: string;
  free_shipping!: boolean;
}

class Price {
  currency!: string;
  amount!: number;
  decimals!: number;
}
