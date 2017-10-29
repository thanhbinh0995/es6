import moment from 'moment';

export function log(message, dash = false) {
  return dash ? console.log("-".repeat(20) + message + "-".repeat(20)) : console.log(message);
}

export function calculateAge(birthday) {
  let today = moment();
  let res = today.year() - birthday.year();
  let checkMonth = today.month() - birthday.month();
  let checkDate = today.date() - birthday.date();
  if (checkMonth < 0 || (checkMonth === 0 && checkDate < 0)) return res - 1;
  else if (checkMonth > 0 || (checkMonth === 0 && checkDate > 0)) return res + 1;
  else return res;
}

export function sortByHeight(cities) {
  return cities.sort((a, b) => b.height - a.height);
}

export function sortByName(cities) {
  return cities.sort((a, b) => {
    let countryA = a.country.toUpperCase();
    let countryB = b.country.toUpperCase();
    return countryA < countryB ? -1
        : countryA > countryB ? 1 : 0;
  })
}

export function filterCities(cities) {
  return cities.filter((city) => {
    return (city.height >= 160 && city.height <= 170) && (city.country[0] === 'B' || city.country[0] === 'C');
  })
}

export function totalHeight(cities) {
  return cities.reduce((height, city) => {
    return height += city.height
  }, 0)
}