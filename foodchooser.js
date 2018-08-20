var namesArr = [
"early",
"own",
"old",
"other",
"small"
];

var names = prompt("what is your name?");

var choose = (Math.floor(Math.random()*namesArr.length));

window.alert(names + namesArr[choose]);
