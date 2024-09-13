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
let index = 0;
let id=0;

let csvStr = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;

cell = ``;

for (let i = 0; i <= csvStr.length; i++) {

    let char = csvStr[i];

    if (char === `,`) {

        csvSheet[index] = cell;
        index++;
        cell=``;

    }

    else if(char===`\n`){
        csvSheet[index] = cell;
        index++;
        cell=``;
    }


    else {
        cell = cell + csvStr[i];
    }

    if(i === csvStr.length -1){
        csvSheet[index] = cell; 
    }

}
console.log(csvSheet);



