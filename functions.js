/**
 * Converts a number a string.
 * @param {number} n
 * @return {string} the number as a string
 */

function numberToString(n){
	  var cactus = "" + n;
    return cactus
};


/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */

function increase(n){
	return n+1;
};

/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */

function decrease(n){
	return n - 1;
};

/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */

function add(x,y){
	return x + y
};


/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */

function subtract(x,y){
	return x - y;
};


/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
 */

 function multiply(x,y){
 	return x * y;
 };

/**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
 */
 
function divide(x, y){
	return x/y;
};


/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */

function square(x){
	return x ** 2 ;
};

/**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */

function calculate(add, x, y){
	console.log("x + y = sum");
	return add(x,y);
};

/**
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 */

function isGreaterThan(a,b){
	if(a > b){
		return true;
	}
};

/**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */

function isLessThan(a,b){
	if(a < b){
		return true;
	}
};

/**
 * Returns true if `a` and `b` are equal.
 * @param {number} a
 * @param {number} b
 * @return {boolean} the numbers are equal
 */

function areEqual(a,b){
	if(a === b){
		return true;
	}else{
		return false;
	}
}



/**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
 */

function minimum(x,y){
	return Math.min(x,y);
}



/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 */

function maximum(x,y){
	return Math.max(x,y);
}

/**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
 */

function isEven(n){
	if(n%2 == 0){
		return true;
	}else{
		return false;
	}
};

/**
 * Returns true if `n` is odd.
 * @param {number} n
 * @return {boolean} the number is odd
 */

 function isOdd(n){
 	if(n%2 == 1){
 		return true;
 	}else{
 		return false;
 	}
 };


/**
 * Returns a letter grade.
 * "A": 90-100%
 * "B": 80-89%
 * "C": 70-79%
 * "D": 60-69%
 * "F": 0-59%
 * @param {number} score
 * @param {number} total maximum possible score
 * @return {string} the score represented as a letter grade
 */

function letterGrade(score, total){
  var grade = ((score/total) * 100);
  //console.log(grade);
  if(grade > 100){
    console.log("Call Elon you're a genius!")
  }else if(grade >= 90 && grade <= 100){
    console.log("A")
  }else if(grade >= 80 && grade <= 89){
    console.log("B")
  }else if(grade >= 70 && grade <= 79){
    console.log("C")
  }else if(grade >= 60 && grade <= 69){
    console.log("D")
  }else if(grade >= 0 && grade <=59){
    console.log("F")
  }else{
    console.log("Study Up!")
  }
  }
  
};

/**
 * Checks if a `restaurant` object has a `reviews` property.
 * If it does, increase the property's `reviews` value by 1.
 * If it does not, set the `reviews` value to 1.
 * @param {object} restaurant   represents a restaurant object
 * @return {object} restaurant
 */

var restaurant = {
  name: "Salad House",
  reviews: 4,
};

//console.log(restaurant);

//console.log(restaurant.reviews);

//console.log(restaurant.hasOwnProperty('reviews'));


function incrementReviews(restaurant){
	if(restaurant.hasOwnProperty('reviews')=== true){
      ((restaurant.reviews)++);
      console.log(restaurant.reviews);
    }else{
      ((restaurant.reviews)--);
      console.log(restaurant.reviews);
    }
};

incrementReviews(restaurant);


/**
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
 */

var word1 = "Hamburger";
var word2 = "Buns";

function combine(word1, word2){
  console.log(word1 + " " + word2);
};

combine(word1, word2);



/**
 * Returns a circle object with the properties `circumference` and `area`.
 * Use Math.PI for the value π.
 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI)
 * @param {number} radius
 * @return {object} circle
 */


 function createCircle(radius){
   var circle = {};
   //console.log(circle)
 	  circle.area = (Math.PI *(radius ** 2));
   //console.log(circle.area)
     circle.circumference = (2 * (Math.PI * radius));
   //console.log(circle.circumference)
   //console.log(circle)
   return circle;
 };

createCircle(4);
console.log(createCircle(4));

