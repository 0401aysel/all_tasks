function clamp(value) {
  return Math.min(Math.max(value, 0), 100);
}

function Pet(name, type, hunger = 50, energy = 100, skills = []){
    this.name = name;
    this.type = type;
    this.hunger =clamp(hunger);
    this.energy = clamp(energy);
    this.skills = skills;
}

Pet.prototype.feed = function(){
    this.hunger = clamp(this.hunger - 20);
    this.energy = clamp(this.energy + 5);
    console.log('Prototype used');
}
Pet.prototype.play = function(){
    if(this.energy < 20){
        console.log('Hali yoxdur oynamaga qoy yatsin :D');
    }else{
        this.hunger = clamp(this.hunger + 10);
        this.energy = clamp(this.energy - 20);
    }
    console.log('Prototype used');
}
Pet.prototype.learnSkills = function(newSkill){
    if( this.skills.includes(newSkill)){
        console.log('Bu bacariq artiq movcuddur');
    }else{
        this.skills.push(newSkill);
        console.log(this.skills);
    }
    console.log('Prototype used');
}
Pet.prototype.sleep = function(){
    this.energy = 100;
    this.hunger = clamp(this.hunger + 30);
    console.log('Prototype used');
}

// add class for animals

class Animal{
    constructor(name, type, hunger = 50, energy = 100, skills = []){
        this.name = name;
        this.type = type;
        this.hunger =clamp(hunger);
        this.energy = clamp(energy);
        this.skills = skills;
    }

    feed(){
        this.hunger = clamp(this.hunger - 20);
        this.energy = clamp(this.energy + 5);
        console.log('Class used');
    }
    play(){
        if(this.energy < 20){
            console.log('Hali yoxdur oynamaga qoy yatsin :D');
        }else{
            this.hunger = clamp(this.hunger + 10);
            this.energy = clamp(this.energy - 20);
        }
        console.log('Class used');
    }
    learnSkills(newSkill){
        if( this.skills.includes(newSkill)){
            console.log('Bu bacariq artiq movcuddur');
        }else{
            this.skills.push(newSkill);
            console.log(this.skills);
        }
        console.log('Class used');
    }
    sleep(){
        this.energy = 100;
        this.hunger = clamp(this.hunger + 30);
        console.log('Class used');
    }
}

const myAnimal = new Animal ('juzzy','dog',19,24,['sleep','jump']);
console.log(myAnimal);