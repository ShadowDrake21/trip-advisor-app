export interface ILocationPhotosOptions {
  limit: number;
  offset: number;
  source: number;
  language: string;
}

export interface ILocationPhotos {
  data: ILocationPhotosData[];
  paging: ILocationPhotosPaging;
  error: Error;
}

export interface ILocationPhotosData {
  id: number;
  is_blessed: boolean;
  album: string;
  caption: string;
  published_date: string;
  images: ILocationPhotosArray;
  source: ILocationPhotosSource;
  user: Partial<ILocationPhotosUser>;
}

export interface ILocationPhotosArray {
  [type: string]: ILocationPhotosArrayItem;
}

export interface ILocationPhotosArrayItem {
  width: number;
  url: string;
  height: number;
}

export interface ILocationPhotosSource {
  name: string;
  localized_name: string;
}

export interface ILocationPhotosUser {
  username: string;
  user_location: ILocationPhotosUserPlace;
  review_count: number;
  reviewer_badge: string;
  avatar: ILocationPhotosAvatar;
}

export interface ILocationPhotosUserPlace {
  name: string;
  id: string;
}

export interface ILocationPhotosAvatar {
  additionalProp: string;
}

export interface ILocationPhotosPaging {
  next: string;
  previous: string;
  results: number;
  total_results: number;
  skipped: number;
}

export interface ILocationPhotosError {
  message: string;
  type: string;
  code: number;
}
