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
console.log(colors)