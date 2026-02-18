# all_tasks
all my tested tasks

let arr = [1, 2];

let arrayLike = {
  0: "something",
  1: "else",
  [Symbol.isConcatSpreadable]: true,
  length: 2
};

alert( arr.concat(arrayLike) ); //

men bunu gormusdum tam basa dusmemisdim ,js info saytinda bunu funksiya prototiple qarisdirdim orda da length var idi / ///////

-----------///////////////
ERROR ?? newAnimal yaratmaq isteyirem sonda constructor func deyil deye olmur? nested etmek olmaz??

console.log(myAnimal)
Animal {name: 'juzzy', type: 'dog', hunger: 19, energy: 24, skills: Array(2), …}energy: 24hunger: 19name: "juzzy"newskill: "aysel"skills: (2) ['sleep', 'jump']type: "dog"[[Prototype]]: Object

myAnimal.d=function(a,b){return a+b;}
ƒ (a,b){return a+b;}

console.log(myAnimal)
Animal {name: 'juzzy', type: 'dog', hunger: 19, energy: 24, skills: Array(2), …}d: ƒ (a,b)length: 2name: ""prototype: {}arguments: nullcaller: null[[FunctionLocation]]: VM422:1[[Prototype]]: ƒ ()[[Scopes]]: Scopes[2]energy: 24hunger: 19name: "juzzy"newskill: "aysel"skills: (2) ['sleep', 'jump']type: "dog"[[Prototype]]: 
myAnimal.d(3,4)
7
myAnimal
Animal {name: 'juzzy', type: 'dog', hunger: 19, energy: 24, skills: Array(2), …}d: ƒ (a,b)energy: 24hunger: 19name: "juzzy"newskill: "aysel"skills: (2) ['sleep', 'jump']type: "dog"[[Prototype]]: Object


------ ERROR LINE -------
newAnimal = new myAnimal((3,5),34,78,'123','456','789','aysel')  
