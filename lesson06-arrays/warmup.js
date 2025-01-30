// 1. Counting: create a function that prints out the numbers 1-10
function countOutTen(){
   let nums = [1,2,3,4,5,6,7,8,9,10]
   console.log(...nums)
}
countOutTen()
// 2. Evens: create a function that prints out the even numbers 1-20
function evenNumbers(start,end){
    for(let i = start; i <= end; i++){
        if (i % 2 === 0){
            console.log(i)
        }
    }
}
evenNumbers(1,10)
//expected output = 2,4,6,8,10

// 3. FizzBuzz: create a function that prints out the numbers 1-100. If the number is divisible by 3, print "Fizz" instead of the number. If the number is divisible by 5, print "Buzz" instead of the number. If the number is divisible by both 3 and 5, print "FizzBuzz" instead of the number.
function FizzBuzz(start,end){
    for(let i = start; i <= end; i++){
        if( i % 3 === 0 && i % 5 === 0){
            console.log("FizzBuzz")
        }else if(i % 3 === 0 && i % 5 !== 0){
            console.log("Fizz")
        }else if(i % 5 === 0 && i % 3 !== 0){
            console.log("Buzz")
        }

        }
    }
FizzBuzz(1,100)
