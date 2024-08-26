import { Categories } from '../enums/categories.enum';

export interface ISearchLocationOptions {
  category: string;
  phone: string;
  address: string;
  latLong: string;
  language: string;
}

export interface ILocatioSearch {
  data: ILocatioSearchItem[];
  error: Error;
}

export interface ILocatioSearchItem {
  location_id: number;
  name: string;
  distance: string;
  bearing: string;
  address_obj: ILocatioSearchItemAddress;
}

export interface ILocatioSearchItemAddress {
  street1: string;
  street2: string;
  city: string;
  state: string;
  country: string;
  postalcode: string;
  address_string: string;
}

export interface ILocatioSearchItemError {
  message: string;
  type: string;
  code: number;
}
