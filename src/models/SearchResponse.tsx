export class SearchResponse {
  // ResponseData
  results!: Result[];
  available_filters!: Filter[];
}

export class Result {
  id!: string;
  // site_id: string;
  title!: string;
  price!: number;
  currency_id!: string;
  thumbnail!: string;
  condition!: string;
  shipping!: Shipping;
}

export class Filter {
  id!: string; // category
  name!: string; // category
  type!: string; // Text
  values!: FilterValue[]; // category list
}

class FilterValue {
  id!: string;
  name!: string;
  results!: number;
}

class Shipping {
  free_shipping!: boolean;
}
