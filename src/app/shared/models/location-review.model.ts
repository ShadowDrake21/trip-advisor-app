export interface ILocationReviews {
  data: ILocationReviewsItem[];
  paging: ILocationReviewsPaging;
  error: Error;
}

export interface ILocationReviewsItem {
  id: number;
  lang: string;
  location_id: number;
  published_date: string;
  rating: number;
  helpful_votes: number;
  rating_image_url: string;
  url: string;
  trip_type: string;
  travel_date: string;
  text: string;
  title: string;
  owner_response: ILocationReviewsItemOwnerResponse;
  is_machine_translated: boolean;
  user: Partial<ILocationReviewsItemUser>;
  subratings: ILocationReviewsItemSubratings;
}

export interface ILocationReviewsItemOwnerResponse {
  id: number;
  lang: string;
  text: string;
  title: string;
  author: string;
  published_date: string;
}

export interface ILocationReviewsItemUser {
  username: string;
  user_location: ILocationReviewsItemUserLocation;
  review_count: number;
  reviewer_badge: string;
  avatar: ILocationReviewsItemAvatar;
}

export interface ILocationReviewsItemUserLocation {
  name: string;
  id: string;
}

export interface ILocationReviewsItemAvatar {
  [extention: string]: string;
}

export interface ILocationReviewsItemSubratings {
  [subrating: string]: ILocationReviewsItemAdditionalProp;
}

export interface ILocationReviewsItemAdditionalProp {
  name: string;
  localized_name: string;
  rating_image_url: string;
  value: number;
}

export interface ILocationReviewsPaging {
  next: string;
  previous: string;
  results: number;
  total_results: number;
  skipped: number;
}

export interface ILocationReviewsError {
  message: string;
  type: string;
  code: number;
}
