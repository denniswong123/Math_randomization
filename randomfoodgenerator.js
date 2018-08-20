var cooking = [
"deep fried",
"boiled",
"cooked",
"steamed",
"fried",
"simmered"
]

var type = [
"potato",
"chicken",
"musubi",
"steak",
"curry",
"spahgetti",
"pho",
"pizza",
"pork",
"bread",
"chicken wings"
]

var randOne = Math.floor(Math.random() * cooking.length);
var randTwo = Math.floor(Math.random() * type.length);
window.alert(cooking[randOne] + " " + type[randTwo]);