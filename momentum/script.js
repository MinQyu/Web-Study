function sayHello(name, age) {
    console.log("Hello my name is " + name + "and I'm " + age);
}

alert();
console.log();
sayHello("gyu", 25);

function plus(a, b){
    console.log(a+b);
}
function divide(a, b){
    console.log(a/b);
}
plus(5, 30);
divide(30, 5);

const player = {
    name: "gyu",
    sayHello: function(name) {
        console.log("hello "+name);
    },
};

player.sayHello(player.name);
