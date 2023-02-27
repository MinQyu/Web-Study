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
        console.log(a+b);
    },
    minus: function(a,b){
        console.log(a-b);
    },
    divide: function(a,b){
        console.log(a/b);
    },
    square: function(a,b){
        console.log(a**b);
    },
};

calculator.add(1,5);
calculator.minus(10,5);
calculator.divide(6,2);
calculator.square(2,3);