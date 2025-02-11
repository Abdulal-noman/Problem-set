

// let arr = [167, 190, 120, 165, 137]
// // find the lower number of a array element
// let lower =-99999999999999999999999;
// for(let i=0;i<arr.length;i++) {
//     if(arr[i]<arr[i+1]){
//         lower=arr[i];
//     }
// }
// console.log(lower) 



// function findAveragePhonePrice(phoneArray){
//     if(phoneArray.length === 0){
//         return 0;
//     }	
//     else{

//         let sum = 0;
//         for(let i=0;i<phoneArray.length;i++){
//             sum += phoneArray[i].price;
//         }
//         return sum/phoneArray.length;
//     }
// }

// const phoneArray =[
//     {model:'iphone 11',brand:'apple',price:1000}, 
//     {model:'iphone 12',brand:'apple',price:1200},

//     {model:'galaxy s21',brand:'samsung',price:900},
// ];
// console.log(findAveragePhonePrice(phoneArray)); //Output: 1033.33

// function findAverage(arrr){
//     let sum=0;
//     for(let i=0;i<arrr.length;i++){
//         sum+=arrr[i].price; 
//     }
//     return sum/arrr.length;
// }
// const arr=[
//    {model:'galaxy 556',brand:'samsung',price:900},
//     {model:'iphone 11',brand:'apple',price:1000},
//     {model:'iphone 12',brand:'apple',price:1200},
// ];
 
// console.log(findAverage(arr)); //Output: 1033.33


// function findTotalSallar(arr) {
// let sum=0;  
// for(let i=0; i<arr.length; i++){
//     sum+=arr[i].starting+arr[i].increment*arr[i].experience;

// }
// return sum;
// }

// const employees = [
//     { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
//     { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
//     { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
//     { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
// ];
// console.log(findTotalSallar(employees));


// const colors = {
//     red: "#ff0000",
//     green: "#00ff00",
//     blue: "#0000ff",
//     "golden rod": '#daa520'
// };
// console.log(colors["golden rod"]);


// const car={
//     brand:'toyota',
//     model:'corolla',
//     year:2021,
//     color:'black',
//     PassengerCapacity:5   
// }
// console.log(car.PassengerCapacity);

// const student = {
//     name: "Hamim Sakep",
//     id: 5421,
//     physics: {
//         subject: "HSC Physics",
//         author: "Shahjahan Tapan",
//         marks: 30
//     }
// };
// console.log(student.physics.subject)
const student = {
    name: "Hamim Sakep",
    id: 5421,
    physics: {
        subject: "HSC Physics",
        author: "Shahjahan Tapan",
        marks: 30
    }
};
// count the number of properties
// let count = 0;
// for (let key in student) {
//     count++;
// }
// console.log(count); //Output: 3
let count = 0
for(let key in student){
    count++;
}