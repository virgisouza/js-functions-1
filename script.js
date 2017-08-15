// Please make sure all your code is added inside the `runAfterTests` function.
function runAfterTests() {
  /**
   * Follow the comments below.
   * Feel free to use `console.log` to see what values are being returned.
   */

  // Create a variable called `myNumber`, and assign it to any number

  var myNumber = 4;

  /**
   * Create another variable called `stringValue`.
   * Assign it the value that's returned when you pass
   * `myNumber into the function `numberToString`.
   */
var stringValue = cactus;

  /**
   * If you pass `myNumber` and `stringValue` into `areEqual`,
   * what value will you get back? Why is that?
   */

   console.log(areEqual(myNumber, stringValue));
 

  /**
   * You may have noticed that the `calculate` function combined
   * the functionality of `add`, `subtract`, `multiply`, and `divide`.
   * Did you try to use those functions _inside_ of `calculate`?
   * If you didn't go back and try it, this is called "reusability"!
   */

   yes

  // Do you see any other functions where code could be reused?

  /**
   * For your `letterGrade` function,
   * what happens if you provide a `score` that is less than 0,
   * or greater than the `total` value?
   * Does it still work as expected? If it doesn't, how could you improve this?
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
   * Your `combine` function looks okay,
   * but what if you wanted to join it with ANY string instead of a single space?
   * Create a new function called `improvedCombine`,
   * with the same parameters as `combine`, but also add a
   * third parameter called `glue` (a string value).
   */

   function improvedCombine(word1, word2, glue){
      console.log(word1 + word2 + word3)
   }

  // What happens if you were to uncomment the following lines?

  combine = improvedCombine;
  console.log(combine('combine', 'improved!', ' is '));
}
