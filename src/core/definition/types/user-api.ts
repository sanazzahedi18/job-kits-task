export type APIUser = {
  gender: "male" | "female";
  name: {
    title: "Mr" | "Ms";
    first: string;
    last: string;
  };
  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    state: string;
    country: string;
    postcode: number;
    coordinates: {
      latitude: string;
      longitude: string;
    };
    timezone: {
      offset: string;
      description: string;
    };
  };
  email: string;
  login: {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
  };
  dob: {
    date: string;
    age: number;
  };
  registered: {
    date: string;
    age: number;
  };
  phone: string;
  cell: string;
  id: {
    name: string;
    value: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  nat: string;
};
export type APIUserResponse = {
  results: APIUser[];
  info: {
    seed: string;
    results: number;
    page: number;
    version: string;
  };
};
//example for refrance
// {
//     "gender": "male",
//     "name": {
//         "title": "Mr",
//         "first": "Arttu",
//         "last": "Mantyla"
//     },
//     "location": {
//         "street": {
//             "number": 4286,
//             "name": "Myllypuronkatu"
//         },
//         "city": "Köyliö",
//         "state": "Finland Proper",
//         "country": "Finland",
//         "postcode": 82639,
//         "coordinates": {
//             "latitude": "-23.3174",
//             "longitude": "-160.0296"
//         },
//         "timezone": {
//             "offset": "+7:00",
//             "description": "Bangkok, Hanoi, Jakarta"
//         }
//     },
//     "email": "arttu.mantyla@example.com",
//     "login": {
//         "uuid": "19c6762c-27ae-4491-8fa0-c4ea420931c9",
//         "username": "redbear830",
//         "password": "vette",
//         "salt": "kDQ6pJdq",
//         "md5": "6484eb6ddffdfc3629d2579cc80c993f",
//         "sha1": "0a99f9afa451ddc7a3efc7860f7dede502602c04",
//         "sha256": "73b5b72678391af7105eb3f3f5c8560aba46dc810a60ba17128b0d31768a5daa"
//     },
//     "dob": {
//         "date": "1961-08-24T07:21:57.640Z",
//         "age": 63
//     },
//     "registered": {
//         "date": "2020-11-18T17:47:48.864Z",
//         "age": 4
//     },
//     "phone": "04-106-207",
//     "cell": "046-046-66-48",
//     "id": {
//         "name": "HETU",
//         "value": "NaNNA951undefined"
//     },
//     "picture": {
//         "large": "https://randomuser.me/api/portraits/men/66.jpg",
//         "medium": "https://randomuser.me/api/portraits/med/men/66.jpg",
//         "thumbnail": "https://randomuser.me/api/portraits/thumb/men/66.jpg"
//     },
//     "nat": "FI"
// }
