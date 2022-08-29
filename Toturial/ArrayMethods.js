/**
 * Array Methods
 * forEach()
 * every()
 * some()
 * find()
 * filter()
 * map()
 * reduce()
 */




var Couses = [
    {
        id: 1,
        name: "JavaScript",
        coins: 100
    },
    {
        id: 2,
        name: "ReactJs",
        coins: 100
    },
    {
        id: 3,
        name: "Redux",
        coins: 100
    },
    {
        id: 4,
        name: "Redux-Toolkit",
        coins: 100
    },
    {
        id: 5,
        name: "Redux-Thunk",
        coins: 100
    },

]

// forEach
// Couses.forEach(function (Couses, index) {
//     console.log(index, Couses)
// })


// every tất cả các phần tử trong mảng phải thỏa mãn diều kiện, nếu có 1 thằng ko thỏa mãn thì sẽ false , nó sẽ ngừng kiểm tra khi gặp điều kiện sai
// var isFree = Couses.every(function (Couses, index) {
//     console.log("🚀 ~ file: ArrayMethods.js ~ line 52 ~ index", index)
//     return Couses.coins === 0;
// })
// console.log()

// some trong các phần tử chỉ cần 1 thằng thỏa mãn thì là true, nó sẽ ngừng kiểm tra khi gặp điều kiện đúng
var isFree = Couses.some(function (Couses, index) {

    return Couses.coins === 0;
})
console.log(isFree)