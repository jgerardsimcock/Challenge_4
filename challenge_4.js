/*  largestPalindromeProduct(multiplicands, digits)
 *
 *  @param multiplicands  the amount of multiplicands to multiply by
 *  @param digits         the amount of digits in each multiplicand
 *
 *  @returns an object containing the 
 *  two factors used to produce the palindromeNumber
 *  and the palindromeNumber itself.
 */
exports.largestPalindromeProduct = function(multiplicands, digits){
  var factor_0 = 0;
  var factor_1 = 0;
  var palindromeNumber = 0;
  function largestPalindrome(){
        var i; //F1
        var j; //F2
        var product = i*j; //product of F1*F2
        var productArray = [];
        for(i = 1; i < 9; i++) { //looping through F1
          for(j = 1; j < 9; j++){//looping through F2
            productArray.push(product.toString());
          }
        }

        for(var k = 0; k < productArray.length; k++) {
          if (productArray[k].reverse() === productArray[k]) {
             //if there are more than one values that are palindromes 
          }
                
        //if array.length is longer than 1 value find the highest value
        //return F1, F2 and palindrome#
  }
       
  // return {
  //   factor_0 : factor_0,
  //   factor_1 : factor_1,
  //   palindromeNumber : palindromeNumber
  // };
};