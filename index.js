





// ================ get even ===========
// goal: Write a for loop that will log only the even numbers in 0 through 200.

const numOfnum = 200
let even = 0

for(let i = 0; i<=numOfnum; i++){
    even = i%2
    if(!even){
        console.log(i)
    }
}

const numOfnum2 = 100

for(let i=1; i<=numOfnum2; i++){
    let divible3 = i%3
    let divible5 = i%5
    const Fizz = 'Fizz '
    const Buzz = 'Buzz '
    if(!divible3 && !divible5){
        console.log(Fizz+Buzz+ i)
        continue
    }
    if(!divible3){

        console.log(Fizz + i)
        
    }
    if(!divible5){
        console.log(Buzz + i)
    }


}



