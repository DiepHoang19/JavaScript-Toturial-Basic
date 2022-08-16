// var a = 1;
// var b = 2;
// var c = 3;

// if (a > 0 && b > 0) {
//     alert("true")
// }


// var myString = "Hoc JS"

//1. Length
// console.log("🚀 ~ file: main.js ~ line 11 ~ myString", myString.length)

//2.Find Index
// console.log(myString.indexOf("JS"))
// console.log(myString.lastIndexOf("JS"))
// console.log(myString.search("JS"))

//3. Cut String
// console.log(myString.slice(1,2))


//4. Replace
// console.log(myString.replace("JS", "JavaScript"))
// /JS/g biếu thức chính quy giúp tìm kiếm tất cả phần tử mà mình muốn tìm và ghi đè nó
// console.log(myString.replace(/JS/g, "JavaScript"))

// 5.Convert To upper case
// Convert thành chữ Hoa
// console.log(myString.toLocaleUpperCase())
// Convert thành chữ Thường
// console.log(myString.toLocaleLowerCase())

//6.Trim: Loại bỏ các khoảng trắng ở 2 đầu
//  console.log(myString.trim().length)

//7. Split: cắt một chuổi thành array chỉ cần tìm ra được 1 điểm chung giữa 2 thằng thì có thể cắt
// var language = "JavaScript, ReactJs, Java";
// TH1: tìm điểm giống nhau để cắt
// console.log(language.split(", "))
// TH2: cắt tất cả các kýt tự trong chuỗi thanhg array
// console.log(language.split(""))


// 8. Get a character by index: lấy được 1 ký tự bởi 1 index cho trước
// const myString2 = "Hoc JavaScript";
//TH1:
// console.log(myString2.charAt(5))
//TH2:
// console.log(myString2[5])