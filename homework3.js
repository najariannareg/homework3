//-A function that takes at least three arguments and returns the result of some set of operations using those arguments - 5 points
const f1 = function(a,b,c){
	return a + b * c
};

//const r = f1(3,5,2);
//console.log(r);


//-A function that takes no arguments and returns something - 5 points
const f2 = function(){
	return "something";
};

//const s = f2();
//console.log(s);

//-A function that takes arguments, does something but does not return anything - 6 points
const f3 = function(firstName,lastName){
	firstName + ' ' + lastName;
};

//const fullName = f3('Nareg','Najarian');
//console.log(fullName);

//-A function that takes three strings and returns the string that is the longest.  - 6 points
const f4 = function(string1,string2,string3){
	let longestString = string1;
	if (longestString.length < string2.length){
		longestString = string2;
	}

	if (longestString.length < string3.length){
		longestString = string3;
	}
	
	return longestString;
};

//const lS = f4('Zaruhi Hakobyan','Vazgen Barfyan','Armen Hajyan');
//console.log(lS);


//-A function that takes two numbers and returns 0 if they are equal, 1 if the first is larger and -1 if the second is larger - 6 points
const f5 = function(number1,number2){
	if (number1 === number2){
		return 0;
	}else if (number1 > number2){
		return 1;
	}else{
		return -1
	};
};

//const n = f5(6,13);
//console.log(n);

//-Create a multiply function (that multiplies the two given arguments together and returns the result) - 2 points
const f6 = function(m1,m2){
	return m1 * m2;
};

//const m = f6(7,9);
//console.log(m);


//-Create a divide function (that divides the first argument by the second and returns the result) - 2 points
const f7 = function(d1,d2){
	return d1 / d2;
};

//const d = f7(16,4);
//console.log(d)


//-Create a triangleArea function that takes base and height as input and returns the area of a triangle without using * or / (HINT: Use the multiply and divide functions you already wrote) - 6 points
const triangleArea = function(base, height) {
	return f7(f6(base, height), 2);
};

//const t = triangleArea(6,10);
//console.log(t);


//-Create a function called numLength that takes a number and returns the number of characters in the number (example: numLength(8940); should return 4).
// Hint: strings have .length, numbers don't - so make a string and then get the length - 6 points
const numlength = function(number){
	return ('' + number).length;
};

//const number = numlength(123456789);
//console.log(number);

//-Create a function that takes two strings and a number.  If the length of the two strings concatenated together is greater than the given number, return 1, else return -1.  - 6 points
const f8 = function(string1, string2, number){
	if (('' + string1 + string2).length > number){
		return 1;
	} else{
		return -1;
	};
};

//const u = f8(123, 456, 5);
//console.log(u);


//-Create a function runStuff that takes two numbers and a string.  If the string is 'rectangle', return the area of a rectangle using the two numbers as base and height.
// If the string is 'triangle', return the area of a triangle (you can use the triangleArea function here).  If the string does not match 'rectangle' or 'triangle', return -1.   - 10 points
const runStuff = function(number1, number2, string){
	if(string === 'rectangle'){
		return number1 * number2;
	} else if(string === 'triangle'){
		return triangleArea(number1, number2);
	} else{
		return -1;
	};
};

//const x = runStuff(8, 14, 'rectangle');
//console.log(x);
//const y = runStuff(8, 14, 'triangle');
//console.log(y);
//const z = runStuff(8, 14, 'zoodoo');
//console.log(z);
