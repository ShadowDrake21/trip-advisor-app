import { ILocationPhotos } from '../models/location-photos.model';
import { ILocation } from '../models/location.model';

export const staticLocation: Partial<ILocation> = {
  location_id: 103887,
  name: 'Statue of Liberty',
  description:
    'The Statue of Liberty Enlightening the World was a gift of friendship from the people of France to the people of the United States and is a universal symbol of freedom and democracy. The Statue of Liberty was dedicated on October 28, 1886, designated as a National Monument in 1924 and restored for her centennial on July 4, 1986.',
  web_url:
    'https://www.tripadvisor.com/Attraction_Review-g60763-d103887-Reviews-Statue_of_Liberty-New_York_City_New_York.html?m=66827',
  address_obj: {
    street1: 'Liberty Island',
    city: 'New York City',
    state: 'New York',
    country: 'United States',
    postalcode: '10004',
    address_string: 'Liberty Island, New York City, NY 10004',
  },
  ancestors: [
    { level: 'City', name: 'New York City', location_id: 60763 },
    { abbrv: 'NY', level: 'State', name: 'New York', location_id: 28953 },
    { level: 'Country', name: 'United States', location_id: 191 },
  ],
  latitude: 40.6892,
  longitude: -74.0444,
  timezone: 'America/New_York',
  phone: '+1 212-363-3200',
  website: 'http://www.nps.gov/stli',
  write_review:
    'https://www.tripadvisor.com/UserReview-g60763-d103887-Statue_of_Liberty-New_York_City_New_York.html?m=66827',
  ranking_data: {
    geo_location_id: 60763,
    ranking_string: '#12 of 2,200 things to do in New York City',
    geo_location_name: 'New York City',
    ranking_out_of: 2200,
    ranking: 12,
  },
  rating: 4.5,
  rating_image_url:
    'https://www.tripadvisor.com/img/cdsi/img2/ratings/traveler/4.5-66827-5.svg',
  num_reviews: '44163',
  review_rating_count: {
    '1': 406,
    '2': 723,
    '3': 3795,
    '4': 11314,
    '5': 27926,
  },
  photo_count: 33978,
  see_all_photos:
    'https://www.tripadvisor.com/Attraction_Review-g60763-d103887-m66827-Reviews-Statue_of_Liberty-New_York_City_New_York.html#photos',
  hours: {
    periods: [
      { open: { day: 1, time: '0830' }, close: { day: 1, time: '1600' } },
      { open: { day: 2, time: '0830' }, close: { day: 2, time: '1600' } },
      { open: { day: 3, time: '0830' }, close: { day: 3, time: '1600' } },
      { open: { day: 4, time: '0830' }, close: { day: 4, time: '1600' } },
      { open: { day: 5, time: '0830' }, close: { day: 5, time: '1600' } },
      { open: { day: 6, time: '0830' }, close: { day: 6, time: '1600' } },
      { open: { day: 7, time: '0830' }, close: { day: 7, time: '1600' } },
    ],
    weekday_text: [
      'Monday: 08:30 - 16:00',
      'Tuesday: 08:30 - 16:00',
      'Wednesday: 08:30 - 16:00',
      'Thursday: 08:30 - 16:00',
      'Friday: 08:30 - 16:00',
      'Saturday: 08:30 - 16:00',
      'Sunday: 08:30 - 16:00',
    ],
  },
  category: { name: 'attraction', localized_name: 'Attraction' },
  subcategory: [
    { name: 'landmarks', localized_name: 'Sights & Landmarks' },
    { name: 'attractions', localized_name: 'Attractions' },
  ],
  groups: [
    {
      name: 'Sights & Landmarks',
      localized_name: 'Sights & Landmarks',
      categories: [
        {
          name: 'Points of Interest & Landmarks',
          localized_name: 'Points of Interest & Landmarks',
        },
        {
          name: 'Monuments & Statues',
          localized_name: 'Monuments & Statues',
        },
      ],
    },
  ],
  neighborhood_info: [
    { location_id: '15565649', name: 'Liberty Island' },
    { location_id: '13208867', name: 'Liberty Island' },
  ],
  trip_types: [
    { name: 'business', localized_name: 'Business', value: '470' },
    { name: 'couples', localized_name: 'Couples', value: '14030' },
    { name: 'solo', localized_name: 'Solo travel', value: '2123' },
    { name: 'family', localized_name: 'Family', value: '13336' },
    { name: 'friends', localized_name: 'Friends getaway', value: '6855' },
  ],
  awards: [
    {
      award_type: 'Travelers Choice',
      year: 2024,
      images: {
        tiny: 'https://static.tacdn.com/img2/travelers_choice/widgets/tchotel_2024_L.png',
        small:
          'https://static.tacdn.com/img2/travelers_choice/widgets/tchotel_2024_L.png',
        large:
          'https://static.tacdn.com/img2/travelers_choice/widgets/tchotel_2024_L.png',
      },
      categories: [],
      display_name: 'Travelers Choice',
    },
    {
      award_type: 'Travelers Choice',
      year: 2023,
      images: {
        tiny: 'https://static.tacdn.com/img2/travelers_choice/widgets/tchotel_2023_L.png',
        small:
          'https://static.tacdn.com/img2/travelers_choice/widgets/tchotel_2023_L.png',
        large:
          'https://static.tacdn.com/img2/travelers_choice/widgets/tchotel_2023_L.png',
      },
      categories: [],
      display_name: 'Travelers Choice',
    },
  ],
};

export const locationPhotos: Partial<ILocationPhotos> = {
  data: [
    {
      id: 79352808,
      is_blessed: false,
      caption: 'Statue of Liberty, Holding book in left hand',
      published_date: '2013-10-26T00:49:09.793Z',
      images: {
        thumbnail: {
          height: 50,
          width: 50,
          url: 'https://media-cdn.tripadvisor.com/media/photo-t/04/ba/d3/e8/statue-of-liberty_rotated_90.jpg',
        },
        small: {
          height: 150,
          width: 150,
          url: 'https://media-cdn.tripadvisor.com/media/photo-l/04/ba/d3/e8/statue-of-liberty_rotated_90.jpg',
        },
        medium: {
          height: 200,
          width: 180,
          url: 'https://media-cdn.tripadvisor.com/media/photo-i/04/ba/d3/e8/statue-of-liberty_rotated_90.jpg',
        },
        large: {
          height: 450,
          width: 338,
          url: 'https://media-cdn.tripadvisor.com/media/photo-s/04/ba/d3/e8/statue-of-liberty_rotated_90.jpg',
        },
        original: {
          height: 2000,
          width: 1500,
          url: 'https://media-cdn.tripadvisor.com/media/photo-o/04/ba/d3/e8/statue-of-liberty_rotated_90.jpg',
        },
      },
      album: 'Other',
      source: { name: 'Traveler', localized_name: 'Traveler' },
      user: { username: 'loki_knows' },
    },
    {
      id: 759434924,
      is_blessed: false,
      caption: '',
      published_date: '2024-08-26T01:06:40.955Z',
      images: {
        thumbnail: {
          height: 50,
          width: 50,
          url: 'https://media-cdn.tripadvisor.com/media/photo-t/2d/44/0e/ac/caption.jpg',
        },
        small: {
          height: 150,
          width: 150,
          url: 'https://media-cdn.tripadvisor.com/media/photo-l/2d/44/0e/ac/caption.jpg',
        },
        medium: {
          height: 200,
          width: 180,
          url: 'https://media-cdn.tripadvisor.com/media/photo-i/2d/44/0e/ac/caption.jpg',
        },
        large: {
          height: 450,
          width: 338,
          url: 'https://media-cdn.tripadvisor.com/media/photo-s/2d/44/0e/ac/caption.jpg',
        },
        original: {
          height: 1365,
          width: 1024,
          url: 'https://media-cdn.tripadvisor.com/media/photo-w/2d/44/0e/ac/caption.jpg',
        },
      },
      album: 'Other',
      source: { name: 'Traveler', localized_name: 'Traveler' },
      user: { username: 'hjsj2204' },
    },
    {
      id: 759434923,
      is_blessed: false,
      caption: '',
      published_date: '2024-08-26T01:06:40.937Z',
      images: {
        thumbnail: {
          height: 50,
          width: 50,
          url: 'https://media-cdn.tripadvisor.com/media/photo-t/2d/44/0e/ab/caption.jpg',
        },
        small: {
          height: 150,
          width: 150,
          url: 'https://media-cdn.tripadvisor.com/media/photo-l/2d/44/0e/ab/caption.jpg',
        },
        medium: {
          height: 200,
          width: 180,
          url: 'https://media-cdn.tripadvisor.com/media/photo-i/2d/44/0e/ab/caption.jpg',
        },
        large: {
          height: 450,
          width: 338,
          url: 'https://media-cdn.tripadvisor.com/media/photo-s/2d/44/0e/ab/caption.jpg',
        },
        original: {
          height: 1365,
          width: 1024,
          url: 'https://media-cdn.tripadvisor.com/media/photo-w/2d/44/0e/ab/caption.jpg',
        },
      },
      album: 'Other',
      source: { name: 'Traveler', localized_name: 'Traveler' },
      user: { username: 'hjsj2204' },
    },
    {
      id: 759434922,
      is_blessed: false,
      caption: '',
      published_date: '2024-08-26T01:06:40.924Z',
      images: {
        thumbnail: {
          height: 50,
          width: 50,
          url: 'https://media-cdn.tripadvisor.com/media/photo-t/2d/44/0e/aa/caption.jpg',
        },
        small: {
          height: 150,
          width: 150,
          url: 'https://media-cdn.tripadvisor.com/media/photo-l/2d/44/0e/aa/caption.jpg',
        },
        medium: {
          height: 200,
          width: 180,
          url: 'https://media-cdn.tripadvisor.com/media/photo-i/2d/44/0e/aa/caption.jpg',
        },
        large: {
          height: 450,
          width: 338,
          url: 'https://media-cdn.tripadvisor.com/media/photo-s/2d/44/0e/aa/caption.jpg',
        },
        original: {
          height: 1365,
          width: 1024,
          url: 'https://media-cdn.tripadvisor.com/media/photo-w/2d/44/0e/aa/caption.jpg',
        },
      },
      album: 'Other',
      source: { name: 'Traveler', localized_name: 'Traveler' },
      user: { username: 'hjsj2204' },
    },
    {
      id: 759434921,
      is_blessed: false,
      caption: '',
      published_date: '2024-08-26T01:06:40.909Z',
      images: {
        thumbnail: {
          height: 50,
          width: 50,
          url: 'https://media-cdn.tripadvisor.com/media/photo-t/2d/44/0e/a9/caption.jpg',
        },
        small: {
          height: 150,
          width: 150,
          url: 'https://media-cdn.tripadvisor.com/media/photo-l/2d/44/0e/a9/caption.jpg',
        },
        medium: {
          height: 200,
          width: 180,
          url: 'https://media-cdn.tripadvisor.com/media/photo-i/2d/44/0e/a9/caption.jpg',
        },
        large: {
          height: 450,
          width: 338,
          url: 'https://media-cdn.tripadvisor.com/media/photo-s/2d/44/0e/a9/caption.jpg',
        },
        original: {
          height: 1365,
          width: 1024,
          url: 'https://media-cdn.tripadvisor.com/media/photo-w/2d/44/0e/a9/caption.jpg',
        },
      },
      album: 'Other',
      source: { name: 'Traveler', localized_name: 'Traveler' },
      user: { username: 'hjsj2204' },
    },
  ],
};
