//Nhập vào ngày sinh(22/12/2012) cho biết đó sinh nhật lần thứ mấy.
// var date = prompt("Enter your birthday: ");

import {calculateAge, log} from './actions';
import moment from 'moment';

log("Cau 1", true);
let date = '22/12/2012';
let birthday = moment(date, "DD/MM/YYYY");
log(`so tuoi hien tai: ${calculateAge(birthday)}`);
log("Het cau 1", true);