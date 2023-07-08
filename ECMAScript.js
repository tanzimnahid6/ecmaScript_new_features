//       Change an Array by copy  ECMAScript 2023
//---------------------------------------------------------------
//Feature-1
    const original = [1, 2, 3, 4];
    //What we have to do,if we want to reverse the array , Simply___
    const reversed = original.reverse()
    console.log("Reversed array ",reversed); // output : [ 4, 3, 2, 1 ]

    //But Now there is a problem ,reverse method muted the original array ,
    // if we want to show the original array 
    console.log("Original array",original); // output : [ 4, 3, 2, 1 ] -> same as a reverse array.

    //But if we want to reverse the array without muted the original array we can use toReversed()
    //toReversed() is a new feature of ECMAScript 2023 
    const newArray = [1, 2, 3, 4, 5]
    const newArrayReversed = newArray.toReversed()
    console.log("Reversed array ",newArrayReversed); //output : [5, 4, 3, 2, 1]
    //But in this case original array remain unchanged
    console.log("Original array",newArray);// output : [1, 2, 3, 4, 5]
