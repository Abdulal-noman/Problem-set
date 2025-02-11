// Write a function to convert temperature from Celsius to Fahrenheit.




// function ctof(temp){
//     let f=(9*temp +160)/5;
//     console.log(f)
// }
// ctof(100) //212;

// You are given an array of numbers. Count how many times the a number is repeated in the array.

// function findcount(arr,semple){
//     let count=0;
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]==semple){
//             count++;
//         }
//     }
//     console.log(count)
// }

// findcount([1,2,3,4,5,2,3,4,5],2) 


// Write a function to count the number of vowels in a string.

// function countvowel(str){
//     let count=0;
//     for(let i=0;i<str.length;i++){
//         if(str[i]=='a'||str[i]=='e'||str[i]=='i'||str[i]=='o'||str[i]=='u'){
//             count++;
//         }
//     }
//     console.log(count)

// }
// countvowel("Neela to mi ki jano na amar redoyer thikana je khane thoti man ak hoye chbor moto jege rooy")

// 

// function countstringlatter(str) {
//     let count = 0;
//     let arr = [];

//     for (let i = 0; i < str.length; i++) {
//         if ((str[i] >= 'a' && str[i] <= 'z') || (str[i] >= 'A' && str[i] <= 'Z')) {
//             count++;
//         } else if (str[i] == ' ' && count > 0) {
//             arr.push(count);
//             count = 0;
//         }
//     }

//     // Handle the last word (no trailing space)
//     if (count > 0) {
//         arr.push(count);
//     }

//     console.log(arr);
// }

// countstringlatter(" I am learning Programming to become a programmer"); // Output: [1, 2, 8, 11, 2, 8, 10]
// countstringlatter("Hello World"); // Output: [5, 5]
// countstringlatter("  Hello   World  "); // Output: [5, 5] (Handles multiple spaces)
// countstringlatter(""); // Output: [] (Handles empty string)
// countstringlatter("OneWord"); // Output: [7] (Handles single word string)


function rendommathnumber(){
    let num=Math.random()*10 +10;
    console.log(num)
}
rendommathnumber()