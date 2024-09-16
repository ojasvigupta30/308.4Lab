//Part 1: Refactoring Old Code


// Your task is to write a script that accomplishes the following:
// Loop through the characters of a given CSV string.
// Store each “cell” of data in a variable.
// When you encounter a comma, move to the next cell.
// When you encounter the “\r\n” sequence, move to the next “row.”
// Log each row of data.
// You do not need to format the data, the following works well.
// console.log(cell1, cell2, cell3, cell4);
// You can make the following assumptions:
// There will only be 4 cells per row.
// There will be no escaped characters other than “\n”.
// Use the example string provided above to test your program. Once you are confident it is working correctly, try the following string to see if your program works properly with other data.
// Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232



let csvSheet = [];
let col = [];

let csvStr = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;

cell = ``;

for (let i = 0; i <= csvStr.length; i++) {

    let char = csvStr[i];

    if (char === `,`) {

        col.push(cell);
        cell=``;

    }

    else if(char===`\n`){
        col.push(cell);
        cell=``;
        //csvSheet.push(col);
        console.log(col);
        col = [];

    }


    else {
        cell = cell + csvStr[i];
    }

    if(i === csvStr.length -1){
        col.push(cell);
        //csvSheet.push(col); 
        console.log(col);
    }


}

// console.log(col);
//console.log(csvSheet);




//Part 2: Expanding Functionality


// Declare a variable that stores the number of columns in each row of data within the CSV.
// Instead of hard-coding four columns per row, expand your code to accept any number of columns. This should be calculated dynamically based on the first row of data.
// You can safely assume that all rows that follow will contain the same number of entries per row.
// Store your results in a two-dimensional array.
// Each row should be its own array, with individual entries for each column.
// Each row should be stored in a parent array, with the heading row located at index 0.
// Cache this two-dimensional array in a variable for later use.
// Using the original CSV example data, here is what the result of this step should look like:
// ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26


let row = [];

cell = ``;

let newArray = [];

for (let i = 0; i <= csvStr.length; i++) {

    let char = csvStr[i];

    if (char === `,`) {

        row.push(cell);
        cell=``;

    }

    else if(char===`\n`){
        row.push(cell);
        cell=``;
        newArray.push(row);
        row = [];

    }


    else {
        cell = cell + csvStr[i];
    }


    if(i === csvStr.length -1){
        row.push(cell);
        newArray.push(row); 
        //console.log(row);
    }


}

//console.log(row);
console.log(newArray);





//Part 3: Transforming Data

// For each row of data in the result array produced by your code above, create an object where the key of each value is the heading for that value’s column.
// Convert these keys to all lowercase letters for consistency.
// Store these objects in an array, in the order that they were originally listed.
// Since the heading for each column will be stored in the object keys, you do not need to create an object for the heading row itself.


let people = {};
let completeRoster = [];
let sNo = 0;

let peopleKey = [];

for(let i=0;i<newArray[0].length;i++){
    peopleKey.push(newArray[0][i].toLowerCase());
} 


for(let i=1;i<newArray.length;i++){

    for(let j=0;j<row.length;j++){


        people[peopleKey[j]] = newArray[i][j];   


    }

    completeRoster.push(people);
    people = {};
}

console.log(completeRoster);










//Part 4: Sorting and Manipulating Data

// Using array methods, accomplish the following tasks, in order upon the result of Part 3:
// Remove the last element from the sorted array.
// Insert the following object at index 1:
// { id: "48", name: "Barry", occupation: "Runner", age: "25" }
// Add the following object to the end of the array:
// { id: "7", name: "Bilbo", occupation: "None", age: "111" }
// So far, the results should look like this:
// [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
//  { id: "48", name: "Barry", occupation: "Runner", age: "25" },
//  { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
//  { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
//  { id: "7", name: "Bilbo", occupation: "None", age: "111" }]
// Finally, use the values of each object within the array and the array’s length property to calculate the average age of the group. This calculation should be accomplished using a loop.

completeRoster = completeRoster.sort(); //sort the array

console.log(completeRoster);

completeRoster.pop(); //remove the last entry

console.log(completeRoster);

completeRoster.splice(1,0,{id: "48", name: "Barry", occupation: "Runner", age: "25" }); //add new element object at index 1

console.log(completeRoster);

completeRoster.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" }); //add element object at the end of the array

console.log(completeRoster);


//calculate avg. age of people in the roster
let totalAge =0;


//Option 1
// completeRoster.forEach(people => {
//     totalAge += Number(people.age)
// });

//Option 2
for(let i=0;i<completeRoster.length;i++){

    totalAge += Number(completeRoster[i].age);

}


let averageAge = totalAge/completeRoster.length;

console.log(averageAge);






//Part 5

// As a final task, transform the final set of data back into CSV format.



let headerRow = Object.keys(completeRoster[0]);

let newRow = [];

let nestedArray = [headerRow];

let csvString = ``;

let csv = ``;

for(let i=0;i<completeRoster.length;i++){
 
    let newPeople = completeRoster[i];

    for(let j=0;j<headerRow.length;j++){

        let key = headerRow[j];
        newRow.push(newPeople[key]);
        
    }

    csv = newRow.join(`,`);
        
    nestedArray.push(newRow);
    csv = nestedArray.join(`\n`);
    newRow = [];
    

}

console.log(csv);






