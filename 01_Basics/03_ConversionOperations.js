/*First decide why you wnat to learn JavaScript b/c if you are not sure why you learn js then you will not done good in this domain
 Think/Try to build something like websites or any product by learning javascript.*/

 let score = "33"
 console.log(typeof score)
 console.log(typeof "score")
 console.log(typeof "33")

 let valueInNumber = Number(score);// Score ---> Number
 console.log(typeof valueInNumber);

 let num= "333abc"// no: me convert nahe hona chaiye
 console.log(typeof num)
 let ValueInnum = Number(num);// Use capital N in number keyword to typecast
 console.log(typeof ValueInnum);
 console.log(ValueInnum);//NaN

 let temp=null
 console.log(typeof temp)
 let ValueIntemp = Number(temp);
 console.log(typeof ValueIntemp);

 /*
 "33" => 33
 "33abc" => NaN
 true => 1; false => 0
 1 => true; 0 => false
 "" => False
 "not_empty" => true

 */

 let isLoggedIn=1
 let booleanIsLoggedIn = Boolean(isLoggedIn);
 console.log(booleanIsLoggedIn);

 let someNumber = 33
 let stringNumber = String(someNumber)// No: => Stringl.
 console.log(typeof stringNumber);
 console.log(stringNumber)