export interface ILocationContentOptions {
  limit: number;
  offset: number;
  source: number;
  language: string;
}

export interface ILocation {
  location_id: number;
  name: string;
  description: string;
  web_url: string;
  address_obj: ILocationAddress;
  ancestors: ILocationAncestor[];
  latitude: number;
  longitude: number;
  timezone: string;
  email: string;
  phone: string;
  website: string;
  write_review: string;
  ranking_data: ILocationRankingData;
  rating: number;
  rating_image_url: string;
  num_reviews: string;
  review_rating_count: ILocationReviewRatingCount;
  subratings: ILocationSubratings;
  photo_count: number;
  see_all_photos: string;
  price_level: string;
  hours: ILocationHours;
  amenities: string[];
  features: string[];
  cuisine: ILocationCuisine[];
  parent_brand: string;
  brand: string;
  category: ILocationCategory;
  subcategory: ILocationSubcategory[];
  groups: ILocationGroup[];
  styles: string[];
  neighborhood_info: ILocationNeighborhoodInfo[];
  trip_types: ILocationTripType[];
  awards: ILocationAward[];
  error: Error;
}

export interface ILocationAddress {
  street1: string;
  street2?: string;
  city: string;
  state: string;
  country: string;
  postalcode: string;
  address_string: string;
}

export interface ILocationAncestor {
  abbrv?: string;
  level: string;
  name: string;
  location_id: number;
}

export interface ILocationRankingData {
  geo_location_id: number;
  ranking_string: string;
  geo_location_name: string;
  ranking_out_of: number;
  ranking: number;
}

export interface ILocationReviewRatingCount {
  [mark: string]: number;
}

export interface ILocationSubratings {
  additionalProp: ILocationAdditionalProp;
}

export interface ILocationAdditionalProp {
  name: string;
  localized_name: string;
  rating_image_url: string;
  value: number;
}

export interface ILocationHours {
  periods: ILocationPeriod[];
  weekday_text: string[];
}

export interface ILocationPeriod {
  open: ILocationOpen;
  close: ILocationClose;
}

export interface ILocationOpen {
  day: number;
  time: string;
}

export interface ILocationClose {
  day: number;
  time: string;
}

export interface ILocationCuisine {
  name: string;
  localized_name: string;
}

export interface ILocationCategory {
  name: string;
  localized_name: string;
}

export interface ILocationSubcategory {
  name: string;
  localized_name: string;
}

export interface ILocationGroup {
  name: string;
  localized_name: string;
  categories: ILocationCategory2[];
}

export interface ILocationCategory2 {
  name: string;
  localized_name: string;
}

export interface ILocationNeighborhoodInfo {
  location_id: string;
  name: string;
}

export interface ILocationTripType {
  name: string;
  localized_name: string;
  value: string;
}

export interface ILocationAward {
  award_type: string;
  year: number;
  images: ILocationImages;
  categories: string[];
  display_name: string;
}

export interface ILocationImages {
  tiny: string;
  small: string;
  large: string;
}

export interface ILocationError {
  message: string;
  type: string;
  code: number;
}
