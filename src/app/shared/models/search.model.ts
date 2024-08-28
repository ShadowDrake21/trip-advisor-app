import { Categories } from '../enums/categories.enum';

export interface ISearchLocationOptions {
  category: string;
  phone: string;
  address: string;
  latLong: string;
  language: string;
}

export interface ILocationSearch {
  data: ILocationSearchItem[];
  error: ILocationSearchError;
}

export interface ILocationSearchItem {
  location_id: number;
  name: string;
  distance: string;
  bearing: string;
  address_obj: ILocationSearchItemAddress;
}

export interface ILocationSearchItemAddress {
  street1: string;
  street2: string;
  city: string;
  state: string;
  country: string;
  postalcode: string;
  address_string: string;
}

export interface ILocationSearchError {
  message: string;
  type: string;
  code: number;
}
