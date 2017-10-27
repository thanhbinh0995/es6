/*
3. Cho chuỗi: "thu 2, thu 5, thu 4, thu 3, thu 6, thu 7";
a. Tách lấy tất cả các số có trong chuỗi.
b. Chuyển chuỗi ở trên thành ngày tiếng anh dạng "on Monday, ...., on Saturday".
Note: Giả thiết một tuần có 6 ngày. Không có ngày chủ nhật.
*/
console.log("-------------- Cau 3 ------------------");
let str = "thu 2, thu 5, thu 4, thu 3, thu 6, thu 7";


console.log("-------------- Cau 3a ------------------");
let allNumber = str.match(/\d+/g).join("");
console.log(allNumber);
console.log("-------------- Het Cau 3a ------------------\n");


console.log("-------------- Cau 3b ------------------");
const daysInWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var res = str.replace(/thu/gi, "on");
res = res.replace(/\d+/gi, (x) => daysInWeek[x-2]);
console.log(res);
console.log("-------------- Het Cau 3b ------------------\n");