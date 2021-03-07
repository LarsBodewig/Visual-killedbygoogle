export interface Graveyard extends Array<Product> {}

export interface Product {
  name: string;
  description: string;
  dateOpen: Date;
  dateClose: Date;
  link: string;
  type: ProductType;
}

export type ProductType = "app" | "service" | "hardware";
