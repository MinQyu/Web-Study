function sayHello(name, age) {
    console.log("Hello my name is " + name + "and I'm " + age);
}

console.log();
sayHello("gyu", 25);



const player = {
    name: "gyu",
    sayHello: function(name) {
        console.log("hello "+name);
    },
};

player.sayHello(player.name);
