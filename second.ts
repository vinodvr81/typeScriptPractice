interface Animal{
    name:string;
    makeNoise():string;
}

class Bird implements Animal{
    name:string;
    constructor(name:string){
        this.name = name;
    }
    makeNoise():string{
        return "Cheep!";
    }
}

interface animal{
    name:string;
    noise:string;
}

function createAnimal(anim:animal):Animal{
    let nAnimal:Animal={
        name:anim.name,
        makeNoise():string{
            return anim.noise;
        }
    };
    return nAnimal as Animal;

}

function logAnimal(anim:any){
    if (anim === undefined){
        console.log("(nothing)")
    }
    else{
        console.log(`${anim.name} says ${anim.noise}`);
    }

}

let cc:any;
logAnimal(cc);

let b = new Bird("parakeet");
console.log(b.makeNoise())
console.log(b.name)
logAnimal({name:b.name,noise:b.makeNoise()});
let c = createAnimal({name:'lion',noise:'roar'});
logAnimal({name:c.name,noise:c.makeNoise()});