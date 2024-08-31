import { ILocationPhotos } from '../models/location-photos.model';
import { ILocationReviews } from '../models/location-review.model';
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

export const locationReviews: Partial<ILocationReviews> = {
  data: [
    {
      id: 966758532,
      lang: 'en',
      location_id: 103887,
      published_date: '2024-08-25T21:06:42Z',
      rating: 5,
      helpful_votes: 0,
      rating_image_url:
        'https://www.tripadvisor.com/img/cdsi/img2/ratings/traveler/s5.0-66827-5.svg',
      url: 'https://www.tripadvisor.com/ShowUserReviews-g60763-d103887-r966758532-Reviews-Statue_of_Liberty-New_York_City_New_York.html?m=66827#review966758532',
      text: 'Planned ahead and booked the crown tickets 3 months in advance to the date we travelled. Surprised how reasonable the price was, that included the ferry cruise , entry onto the pedestal and to climb up into her crown ! \nIt was an incredible experience. Well supervised and very safe to do so. Climbed the winding staircase up and down with plenty of safe opportunities to stop and rest on the way. \nJust took my breath away when you look out of the mini windows and take in where you actually are …. In the crown !!',
      title:
        'We booked the crown tickets and my word it was an incredible experience!',
      trip_type: 'Couples',
      travel_date: '2024-08-31',
      user: {
        username: 'hjsj2204',
        user_location: {
          id: '186422',
          name: 'Evesham, Worcestershire, England',
        },
        avatar: {
          thumbnail:
            'https://media-cdn.tripadvisor.com/media/photo-t/1a/f6/f4/20/default-avatar-2020-31.jpg',
          small:
            'https://media-cdn.tripadvisor.com/media/photo-l/1a/f6/f4/20/default-avatar-2020-31.jpg',
          medium:
            'https://media-cdn.tripadvisor.com/media/photo-f/1a/f6/f4/20/default-avatar-2020-31.jpg',
          large:
            'https://media-cdn.tripadvisor.com/media/photo-p/1a/f6/f4/20/default-avatar-2020-31.jpg',
          original:
            'https://media-cdn.tripadvisor.com/media/photo-o/1a/f6/f4/20/default-avatar-2020-31.jpg',
        },
      },
      owner_response: {
        id: 0,
        lang: '',
        text: '',
        title: '',
        author: '',
        published_date: '',
      },
      is_machine_translated: false,
      subratings: {},
    },
    {
      id: 966586162,
      lang: 'en',
      location_id: 103887,
      published_date: '2024-08-24T20:47:21Z',
      rating: 5,
      helpful_votes: 1,
      rating_image_url:
        'https://www.tripadvisor.com/img/cdsi/img2/ratings/traveler/s5.0-66827-5.svg',
      url: 'https://www.tripadvisor.com/ShowUserReviews-g60763-d103887-r966586162-Reviews-Statue_of_Liberty-New_York_City_New_York.html?m=66827#review966586162',
      text: 'Had a great relaxing trip to the Statue of Liberty today with the family. It was fun and a relaxing boat trip. We had to pay extra to go inside which wasn’t included in the online booking but it’s okay it’s boring as been there more than 30 years ago & it was pretty boring. A nice day out thank you',
      title: 'Statue of Liberty with the kids',
      trip_type: 'Family',
      travel_date: '2024-08-31',
      user: {
        username: 'jennifah2023',
        user_location: {
          id: '186338',
          name: 'London, England',
        },
        avatar: {
          thumbnail:
            'https://media-cdn.tripadvisor.com/media/photo-t/1a/f6/e2/a7/default-avatar-2020-44.jpg',
          small:
            'https://media-cdn.tripadvisor.com/media/photo-l/1a/f6/e2/a7/default-avatar-2020-44.jpg',
          medium:
            'https://media-cdn.tripadvisor.com/media/photo-f/1a/f6/e2/a7/default-avatar-2020-44.jpg',
          large:
            'https://media-cdn.tripadvisor.com/media/photo-p/1a/f6/e2/a7/default-avatar-2020-44.jpg',
          original:
            'https://media-cdn.tripadvisor.com/media/photo-o/1a/f6/e2/a7/default-avatar-2020-44.jpg',
        },
      },
      owner_response: {
        id: 0,
        lang: '',
        text: '',
        title: '',
        author: '',
        published_date: '',
      },
      is_machine_translated: false,
      subratings: {},
    },
    {
      id: 966329073,
      lang: 'en',
      location_id: 103887,
      published_date: '2024-08-23T09:00:18Z',
      rating: 5,
      helpful_votes: 0,
      rating_image_url:
        'https://www.tripadvisor.com/img/cdsi/img2/ratings/traveler/s5.0-66827-5.svg',
      url: 'https://www.tripadvisor.com/ShowUserReviews-g60763-d103887-r966329073-Reviews-Statue_of_Liberty-New_York_City_New_York.html?m=66827#review966329073',
      text: 'The statue of Liberty is an iconic symbol of freedom and democracy. Standing tall in New York harbor. Visiting this majestic monument offers stunning views and deep sense of history',
      title: 'Stunning views and deep sense of history',
      trip_type: 'Couples',
      travel_date: '2024-07-31',
      user: {
        username: 'andrewcW2236SB',
        user_location: {
          id: '60763',
          name: 'New York City, New York',
        },
        avatar: {
          thumbnail:
            'https://media-cdn.tripadvisor.com/media/photo-t/1a/f6/ec/a2/default-avatar-2020-3.jpg',
          small:
            'https://media-cdn.tripadvisor.com/media/photo-l/1a/f6/ec/a2/default-avatar-2020-3.jpg',
          medium:
            'https://media-cdn.tripadvisor.com/media/photo-f/1a/f6/ec/a2/default-avatar-2020-3.jpg',
          large:
            'https://media-cdn.tripadvisor.com/media/photo-p/1a/f6/ec/a2/default-avatar-2020-3.jpg',
          original:
            'https://media-cdn.tripadvisor.com/media/photo-o/1a/f6/ec/a2/default-avatar-2020-3.jpg',
        },
      },
      owner_response: {
        id: 0,
        lang: '',
        text: '',
        title: '',
        author: '',
        published_date: '',
      },
      is_machine_translated: false,
      subratings: {},
    },
    {
      id: 965559215,
      lang: 'en',
      location_id: 103887,
      published_date: '2024-08-18T23:53:17Z',
      rating: 5,
      helpful_votes: 0,
      rating_image_url:
        'https://www.tripadvisor.com/img/cdsi/img2/ratings/traveler/s5.0-66827-5.svg',
      url: 'https://www.tripadvisor.com/ShowUserReviews-g60763-d103887-r965559215-Reviews-Statue_of_Liberty-New_York_City_New_York.html?m=66827#review965559215',
      text: 'Our cruise ship passed by this iconic statue and the views were terrific and very moving.  Always a pleasure to see for its beauty and its symbolic importance.  Lots of great opportunities to see the statue from the Harbor, best views.  it is big and it is grand.',
      title: 'Statue in the Harbor',
      trip_type: 'Couples',
      travel_date: '2024-08-31',
      user: {
        username: 'TV2451',
        user_location: {
          id: '32810',
          name: 'Oakland, California',
        },
        avatar: {
          thumbnail:
            'https://media-cdn.tripadvisor.com/media/photo-t/1a/f6/e3/1f/default-avatar-2020-46.jpg',
          small:
            'https://media-cdn.tripadvisor.com/media/photo-l/1a/f6/e3/1f/default-avatar-2020-46.jpg',
          medium:
            'https://media-cdn.tripadvisor.com/media/photo-f/1a/f6/e3/1f/default-avatar-2020-46.jpg',
          large:
            'https://media-cdn.tripadvisor.com/media/photo-p/1a/f6/e3/1f/default-avatar-2020-46.jpg',
          original:
            'https://media-cdn.tripadvisor.com/media/photo-o/1a/f6/e3/1f/default-avatar-2020-46.jpg',
        },
      },
      owner_response: {
        id: 0,
        lang: '',
        text: '',
        title: '',
        author: '',
        published_date: '',
      },
      is_machine_translated: false,
      subratings: {},
    },
    {
      id: 965553768,
      lang: 'en',
      location_id: 103887,
      published_date: '2024-08-18T22:18:48Z',
      rating: 5,
      helpful_votes: 0,
      rating_image_url:
        'https://www.tripadvisor.com/img/cdsi/img2/ratings/traveler/s5.0-66827-5.svg',
      url: 'https://www.tripadvisor.com/ShowUserReviews-g60763-d103887-r965553768-Reviews-Statue_of_Liberty-New_York_City_New_York.html?m=66827#review965553768',
      text: 'We managed to get Crown Access tickets this time, we booked 5 months in advance to get them and it’s well worth it.\n\nIt’s really worthwhile paying a relatively small amount to visit the Statue and Ellis island rather than take the free staten island ferry.\n\nThe spiral staircase to the top is pretty tight, we found you end up queuing 1/2 way up so we didn’t find it too tiring.\n\nThe crown is really small, surprising small, great views and well worth it, but the climb down I found more difficult, the stairs are narrow and steep, I actually went backwards down them, it’s August and very hot inside.\n\nBrilliant experience and well worth it.',
      title: 'Crown access well worth it',
      trip_type: 'Family',
      travel_date: '2024-08-31',
      user: {
        username: 'LadAndHisTravels',
        user_location: {
          id: '187046',
          name: 'Harrogate, North Yorkshire, England',
        },
        avatar: {
          thumbnail:
            'https://media-cdn.tripadvisor.com/media/photo-t/01/2e/70/89/avatar010.jpg',
          small:
            'https://media-cdn.tripadvisor.com/media/photo-l/01/2e/70/89/avatar010.jpg',
          medium:
            'https://media-cdn.tripadvisor.com/media/photo-f/01/2e/70/89/avatar010.jpg',
        },
      },
      owner_response: {
        id: 0,
        lang: '',
        text: '',
        title: '',
        author: '',
        published_date: '',
      },
      is_machine_translated: false,
      subratings: {},
    },
  ],
};
