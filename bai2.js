/*
2.
Cho Countries: https://github.com/samayo/country-json/blob/master/src/country-by-avg-male-height.json;
a. Sort: Theo tên(tăng dần)
b. Sort: Theo height(giảm dần)
c. Tìm các quốc gia có height [160;170] và tên quốc gia bắt đầu bằng ký tự B hoặc C
d. Tính tổng height của câu c
*/
import cities from './cities.json'

function sortByHeight(cities) {
  return cities.sort((a, b) => b.height - a.height);
}

function sortByName(cities) {
  return cities.sort((a, b) => {
    let countryA = a.country.toUpperCase();
    let countryB = b.country.toUpperCase();
    return countryA < countryB ? -1
      : countryA > countryB ? 1 : 0;
  })
}

function filterCities(cities) {
  return cities.filter((city) => {
    return (city.height >= 160 && city.height <= 170) && (city.country[0] === 'B' || city.country[0] === 'C');
  })
}

function totalHeight(cities) {
  return cities.reduce((height, city, index, cities_custom) => {
    return height += city.height
  }, 0)
}

console.log("-------------- Cau 2 ------------------");
console.log("-------------- Cau 2a ------------------");
console.log("sort cities by height");
let cityByHeight = sortByHeight(cities.slice());
console.log(cityByHeight);
console.log("-------------- Het Cau 2a ------------------\n");


console.log("-------------- Cau 2b ------------------");
console.log("sort cities by name");
let citiesByName = sortByName(cities.slice());
console.log(citiesByName);
console.log("-------------- Het Cau 2b ------------------\n");


console.log("-------------- Cau 2c ------------------");
console.log("cities have height between 160 and 170 and first country name begin B or C");
let citiesCustom = filterCities(cities);
console.log(citiesCustom);
console.log("----------------- Het cau 2c ---------------\n")


console.log("-------------- Cau 2d ------------------");
let total = totalHeight(citiesCustom);
console.log(`total height is ${total}`);
console.log("----------------- Het cau 2d ---------------\n")
console.log("----------------- Het cau 2 ---------------\n\n")