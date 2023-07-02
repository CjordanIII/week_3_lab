





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


//  ============ FizzBuzz ============
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




// ============= wild wild life =============


const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

//====== chanage in plantee b day======

plantee.splice(2,1,5001)

//====== wolfy city change=====

wolfy.splice(3,1,"Gotham City")

//=======D'art hometown====

dart.splice(4,0,'Hawkins')

//====== wolfy name change=======

wolfy.splice(0,1, 'Gameboy')

console.table(plantee)
console.table(wolfy)
console.table(dart)





//=========yell at the Ninja turtles======


// Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo).
// Use a for of loop to call toUpperCase() on each of them and print out the result.
// Haven't heard of for of loops?

// As a developer, you'll be a lifelong learner and constantly encountering new things. We'll give you little stretches like this to get you used to looking at documentation and figuring some things out on your own. You've got this!


const ninjaTurtles = ["Donatello", 'Leonardo', 'Raphael', 'Michaelangelo']


for(let turtles of ninjaTurtles){
    let uppercase = turtles.toUpperCase()
     console.log(uppercase)
}


console.log('==================================================================================')











