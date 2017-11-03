//Nhập vào ngày sinh(22/12/2012) cho biết đó sinh nhật lần thứ mấy.
// var date = prompt("Enter your birthday: ");

import {calculateAge, log} from './actions';
import moment from 'moment';

let res = calculateAge();
document.getElementById("solution1").innerHTML = document.getElementById("date").value;;
log("Cau 1", true);
log(`so tuoi hien tai: ${res}`);
log("Het cau 1", true);