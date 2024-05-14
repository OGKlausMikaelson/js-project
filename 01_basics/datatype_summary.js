// primitive data type

// 7 types: string , number, boolean,null, undefined, symbol, bigint(scientific value)

//reference type(non-primitive)

//reference in memory like- array, objects, functions

//JS is a dynamic typed language

const score = 100
const  value =100.01
const value1 =false
const temp =null
let useremail = undefined

const id =Symbol('123') // most probably ids are unique

const ed = Symbol('123')

console.log(id==ed) // since both are unique symbols

const bignumber = 1848178729837825825n

const heroes = ["thor","iron-man"];

let myObj = {
    name:"Raunak",//object {}
    age:21,
}

const myFunction = function(){
    console.log("Hello user")
}

console.log(typeof BigInt)

// stack (give u a copy) (primitive) heap (reference stored in memory)

let name1 = "raunak srivastava" // this is primitive and goes to stack

name2 = name1 // reference
name2 = "rancho"
console.log(name1)
console.log(name2)







