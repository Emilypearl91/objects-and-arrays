// light color array 
let lightColors = ['pink', 'yellow', 'orange', 'sage'];

//check it in node
console.log(lightColors);

//dark color array
let darkColors = ['red', 'blue', 'green'];

//check it in node
console.log(darkColors);

//add to a color to dark color array 
darkColors.push('purple');

// check it in node
console.log(darkColors);

//remove from an array
lightColors.pop();

//check it in node
console.log(lightColors);

//merge together light and dark colors
let colors = lightColors.concat(darkColors);

//check it in node
console.log(colors);

//create a object using new object()
let pencilCase = new Object();


//check in node
console.log(pencilCase);

//create and log an array of the values of your object
 pencilCase = {
  pens: 2,
  pencilCrayons: 7,
  highlighters: 2,
};

//check in node
console.log(Object.values(pencilCase));

//reduce abilty to edit object
Object.freeze(pencilCase);

//check in node
//pencilCase.pens = 3;
console.log(pencilCase);
//pen stays at 2