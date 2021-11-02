//1
// Create two paramaters
function areBothSame(num1, num2) {
    // if paramater1 is equal in value to paramater2, return true
    // if (num1 == num2) {
    //     return true;
    //     // else return false
    // } else {
    //     return false;
    // }
    return num1 == num2;
}

// console.log(areBothSame(1, '1'));

//2
// Create two paramaters
function areBothEqual(num1, num2) {
    // if paramater1 is equal in value & data type to paramater2, return true
    // else return false
    return num1 === num2;
}

// console.log(areBothEqual(true, 1));

//3
// Create four paramaters
function areAllFourEqual(num1, num2, num3, num4) {
    // if all four paramaters are equal in value & data type, return true
    // else return false
    return (num1 === num2) && (num2 === num3) && (num3 === num4);
}

// console.log(areAllFourEqual("2", "2", "2", 2));

//4
// Create four paramaters
function areAllFourSame(num1, num2, num3, num4) {
    // if all four paramaters are equal in value, return true
    // else return false 
    return (num1 == num2) && (num2 == num3) && (num3 == num4);
}

// console.log(areAllFourSame(true, true, 2, "1"));

//5
// Create four paramaters
function areAllFourSameOrEqual(num1, num2, num3, num4) {
    // if all four paramaters are equal in both value & data type, return the string 'equal'
    // else if all four paramters are equal in value, but not data type, return the string 'same'
    // else return null
    let e = 'equal';
    let s = 'same';
    if ((num1 === num2) && (num2 === num3) && (num3 === num4)) {
        return e;
    } else if ((num1 == num2) && (num2 == num3) && (num3 == num4)) {
        return s;
    } else {
        return null;
    }
}

console.log(areAllFourSameOrEqual("2", 2, 1, "2"));