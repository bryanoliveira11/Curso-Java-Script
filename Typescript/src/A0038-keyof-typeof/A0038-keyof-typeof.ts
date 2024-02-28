/* keyof e typeof */

const colorsObj = {
  vermelho: 'red',
  azul: 'blue',
  verde: 'green',
};

// typeof
type ColorsObj = typeof colorsObj;

// keyof
type ColorsKeys = keyof ColorsObj;

function translateColor(color: ColorsKeys, colors: ColorsObj) {
  return colors[color];
}

console.log(translateColor('vermelho', colorsObj));
