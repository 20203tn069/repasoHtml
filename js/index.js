/*let var const
const genera un constante
var and let generan una variable
$scope = fragmento de codigo {}
$scope la funcion suma es un scope */

//arrow function

function suma(num1, num2){
    return num1+num2;
}
const suma = function(num1, num2){
    return num1+num1;
}

//un arrow funcion tiene un return implicito 
const suma = (num1, num2) => num1+num2 

//template string 
const name = "Mitzi";
const surname = "Aquino"
const lastname = "Gutierrez"
const fullname = none + '' + surname + '' + lastname
const fullname2 =`${name} ${surname} ${lastname}` //utilizando template string

const person ={
    name:'',
    surname:'',
    lastname:null
}

(()=>{//arrow funcion autoejecutable 
    const name= person.name.toString();
    const name2 = `${person.name} ${person.lastname ? person.lastname: ''}`
    //
})()

//array
const roles = [1,2,3,{name: '', surname: '',}]//esto esta mal a nivel de codigo
//arrayList
const roles2 = [
    {
        key: 'ADMIN',
        name: 'Super administrador'
    },
    {
        key: 'USER',
        name:'usuario'
    }
]
//list
const rles3 = {}
//arrayList, array, list
//prototype
//push, splice, indexOf, find, filter, map, foreach, lenght, etc
roles.forEach((element,index) =>{
    console.log(element.name);
})

for(let i=0;i<roles.length;i++){
    console.log(roles[i].name);
}

//desestructuracion de objetos
constperson2 ={
    name: 'mitzi',
    age: 24,
    address:{
        street: 'barona',
        number: 29
    }
}
console.log(person2.name);
console.log(person2.address.street);
(() => {
    const {name, address:{street}}= person2
})










