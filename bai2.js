/*
 2.
 Cho Countries: https://github.com/samayo/country-json/blob/master/src/country-by-avg-male-height.json;
 a. Sort: Theo tên(tăng dần)
 b. Sort: Theo height(giảm dần)
 c. Tìm các quốc gia có height [160;170] và tên quốc gia bắt đầu bằng ký tự B hoặc C
 d. Tính tổng height của câu c
 */
import cities from './cities.json'
import {sortByHeight, sortByName, filterCities, totalHeight, log} from './actions';

log(" Cau 2 ", true);
log(" Cau 2a ", true);
log(" sap xep cac quoc gia theo chieu cao ");
let cityByHeight = sortByHeight(cities.slice());
log(cityByHeight);
log(" Het Cau 2a ", true);


log(" Cau 2b ", true);
log(" sap xep cac quoc gia theo ten ");
let citiesByName = sortByName(cities.slice());
log(citiesByName);
log(" Het Cau 2b ", true);


log(" Cau 2c ", true);
log("loc cac quoc gia co chieu cao tu [160, 170] va ten quoc gia bat dau B hoac C");
let citiesCustom = filterCities(cities);
log(citiesCustom);
log(" Het cau 2c ", true);


log(" Cau 2d ", true);
let total = totalHeight(citiesCustom);
log(`tong chieu cao cua cac quoc gia o trong cau c la ${total}`);
log(" Het cau 2d ", true);
log(" Het cau 2 ", true);