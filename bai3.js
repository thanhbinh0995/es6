/*
3. Cho chuỗi: "thu 2, thu 5, thu 4, thu 3, thu 6, thu 7";
a. Tách lấy tất cả các số có trong chuỗi.
b. Chuyển chuỗi ở trên thành ngày tiếng anh dạng "on Monday, ...., on Saturday".
Note: Giả thiết một tuần có 6 ngày. Không có ngày chủ nhật.
*/
import {log} from './actions';

log(" Cau 3 ", true);
let str = "thu 2, thu 5, thu 4, thu 3, thu 6, thu 7";
log(`str = ${str}`);

log(" Cau 3a ", true);
let allNumber = str.match(/\d+/g).join("");
log(`tat ca cac so co trong chuoi str la : ${allNumber}`);
log(" Het Cau 3a ", true);


log(" Cau 3b ", true);
const daysInWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let res = str.replace(/thu/gi, "on");
res = res.replace(/\d+/gi, (x) => daysInWeek[x-2]);
log(res);
log(" Het Cau 3b ", true);