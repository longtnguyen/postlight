import { get } from 'lodash';
export const transform = (arr) => {
  return arr.map((data) => {
    return {
      title: get(data, 'name.title', ''),
      firstName: get(data, 'name.first', ''),
      lastName: get(data, 'name.last', ''),
      email: get(data, 'email', ''),
      address: `${get(data, 'location.street.number', '')} ${get(data, 'location.street.name', '')}`,
      city: get(data, 'location.city', ''),
      state: get(data, 'location.state', ''),
      timezone: get(data, 'timezone.offset', ''),
      gender: get(data, 'gender', ''),
      coordinateLat: get(data, 'coordinates.latitude', ''),
      coordinateLong: get(data, 'coordinates.longitude', ''),
      pictureThumb: get(data, 'picture.thumbnail', ''),
      pictureLarge: get(data, 'picture.large', ''),
      uuid: get(data, 'login.uuid', '')
    }
  })
}