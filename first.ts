let tt:number[][] = [[1,2,3],[10,11,12,78]];
console.log(tt[0].length)
console.log(tt[1].length)
console.log(tt)
tt[0][2] = 100;
console.log(tt)
const months = ["January", "February", "March", "April", "May", "June", "July"];

const random = Math.floor(Math.random() * months.length);
console.log(random, months[random]);

function make2D(array:number[]){
    var return_var:string[][] =[];
    for (let i=0;i<array.length;i++){
        return_var[i] =[]
        for(let j=0;j<array[i];j++){
            return_var[i][j] = months[Math.floor(Math.random() * months.length)];

        }
    }
 console.log(return_var.length);   
 return return_var;
}

console.log(make2D([3,1]));

function logColors2D(array:string[][]){
    for(let i=0;i<array.length;i++){
        let myString = array[i].toString();
        
    }
}

function ctl(array:[string,number]=["red",10]):[string,number]{
    return array;
}
console.log("red"*'2');
