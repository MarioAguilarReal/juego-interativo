let getRandomNumber = size => {
  return Math.floor(Math.random() * size);
};

let getDistance = (e, target) => {
  let diffX = e.offsetX - target.x;
  let diffY = e.offsetY - target.y;
  return Math.sqrt(diffX * diffX + diffY * diffY);
};

let getDistanceHint = (distance, tolerance) => {
  if (distance < tolerance) {
    return {text: "Hirviendo!", color: "rojo"};
  } else if (distance < tolerance + 10) {
    return {text: "Caliente", color: "naranja"};
  } else if (distance < tolerance + 30) {
    return {text: "Tibio", color: "amarillo"};
  } else if (distance < tolerance + 50) {
    return {text: "Frio", color: "verde"};
  } else if (distance < tolerance + 70) {
    return {text: "Muy frio", color: "azul"};
  } else if (distance < tolerance + 900) {
    return {text: "Congelado!", color: "violeta"};
  } else {
    return {text: "Extremo!", color: "violeta-obscuro"};
  }
}
