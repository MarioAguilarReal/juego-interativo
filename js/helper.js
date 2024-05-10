let getRandomNumber = size => {
  return Math.floor(Math.random() * size);
};

let getDistance = (e, target) => {
  let diffX = e.offsetX - target.x;
  let diffY = e.offsetY - target.y;
  return Math.sqrt(diffX * diffX + diffY * diffY);
};

let getDistanceHint = distance => {
  if (distance < 30) {
    return {text: "Hirviendo!", color: "rojo"};
  } else if (distance < 40) {
    return {text: "Caliente", color: "naranja"};
  } else if (distance < 60) {
    return {text: "Tibio", color: "amarillo"};
  } else if (distance < 80) {
    return {text: "Frio", color: "verde"};
  } else if (distance < 100) {
    return {text: "Muy frio", color: "azul"};
  } else if (distance < 120) {
    return {text: "Congelado!", color: "violeta"};
  } else {
    return {text: "Extremo!", color: "violeta-obscuro"};
  }
}
