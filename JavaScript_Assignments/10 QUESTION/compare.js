// Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
//     - 4 > 3
//     - 4 >= 3
//     - 4 < 3
//     - 4 <= 3
//     - 4 == 4
//     - 4 === 4
//     - 4 != 4
//     - 4 !== 4
//     - 4 != '4'
//     - 4 == '4'
//     - 4 === '4'

// EXPECTED SOLUTIONS:-
4 > 3; //true
4 >= 3; //true
4 < 3; //false
4 <= 3; //false
4 == 4; //true
4 === 4; //true
4 != 4; //false
4 !== 4; //false
4 != "4"; //false
4 == "4"; //true
4 === "4"; //false

//OUTPUT:
console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != "4");
console.log(4 == "4");
console.log(4 === "4");

//     - Find the length of python and jargon and make a falsy comparison statement.

s1 = "python";
s2 = "jargon";
console.log(s1.length < s2.length);
