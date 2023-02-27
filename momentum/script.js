const player = {
    name: "Gyu",
    age: 25,
}

function plus(a, b){
    console.log(a + b);
}
console.log(player, console);
plus(5, 10);

const calculator = {
    add: function(a,b){
        return(a+b);
    },
    minus: function(a,b){
        return(a-b);
    },
    times: function(a,b){
        return(a*b);
    },
    divide: function(a,b){
        return(a/b);
    },
    square: function(a,b){
        return(a**b);
    },
};
const age = 25;
function calculateKrAge(ageOfForeigner){
    return ageOfForeigner + 2;
}

const krAge = calculateKrAge(age);
console.log(krAge);

const result = calculator.add(5,6);
const result2 = calculator.times(result, 2);

console.log(result);
console.log(result2);