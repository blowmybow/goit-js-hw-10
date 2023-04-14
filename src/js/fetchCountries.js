const URL = 'https://restcountries.com/v3.1/name';
const QUERY = 'name,capital,population,flags,languages';

export function fetchCountries(name) {
  return fetch(`${URL}/${name}?fields=${QUERY}`).then(response => {
    if (!response.ok) {
      throw new Error('Data fail!');
    }
    return response.json();
  });
}
