//Nhập vào ngày sinh(22/12/2012) cho biết đó sinh nhật lần thứ mấy.
// var date = prompt("Enter your birthday: ");

import moment from 'moment';

function calculateAge(birthday) {
    let today = moment();
    let res = today.year() - birthday.year();
    let checkMonth = today.month() - birthday.month();
    let checkDate = today.date() - birthday.date();
    if (checkMonth < 0 || (checkMonth === 0 && checkDate < 0)) return res - 1;
    else if (checkMonth > 0 || checkMonth ===0 && checkDate > 0) return res + 1;
    else return res;
}

console.log("--------------Cau 1------------------")
let date = '22/12/2012';
let birthday = moment(date, "DD/MM/YYYY");
console.log(calculateAge(birthday));
console.log("----------------- Het cau 1 ---------------\n\n")