import { Categories } from '../enums/categories.enum';

export interface ISearchLocationOptions {
  category: Categories;
  phone: string;
  address: string;
  latLong: string;
  language: string;
}
