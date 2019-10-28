import { get } from 'lodash';
import axios from 'axios';
export const transform = (arr) => {
  return arr.map((data) => {
    return {
      title: get(data, 'name.title', ''),
      firstName: get(data, 'name.first', ''),
      lastName: get(data, 'name.last', ''),
      email: get(data, 'email', ''),
      phone: get(data, 'phone', ''),
      address: `${get(data, 'location.street.number', '')} ${get(data, 'location.street.name', '')}`,
      city: get(data, 'location.city', ''),
      state: get(data, 'location.state', ''),
      timezone: get(data, 'location.timezone.offset', ''),
      gender: get(data, 'gender', ''),
      coordinateLat: get(data, 'location.coordinates.latitude', ''),
      coordinateLong: get(data, 'location.coordinates.longitude', ''),
      pictureThumb: get(data, 'picture.thumbnail', ''),
      pictureLarge: get(data, 'picture.large', ''),
      uuid: get(data, 'login.uuid', '')
    }
  })
}

export const getAllData = () => {
  let cache;
  if(window && window.sessionStorage) {
    cache = window.sessionStorage.getItem('cache');
  }
  if(cache) {
    return cache;
  } else {
    axios.get('https://rlyke4qgza.execute-api.us-east-1.amazonaws.com/dev/')
    .then((response) => {
      window.sessionStorage.setItem('cache', response);
      return response
    })
    .catch((err)=> {
      console.log(err);
    })
  }
}