const WIDTH = 800;
const HEIGHT = 600;

let target = {
  x: getRandomNumber(WIDTH),
  y: getRandomNumber(HEIGHT)
};

let mapElement = document.getElementById('map');
let distanceElement = document.getElementById('distance');
let attempsElement = document.getElementById('attempts');

let clicks = 0;


mapElement.addEventListener('click', function(e) {
  clicks++;

  let distance = getDistance(e, target);
  let distanceHint = getDistanceHint(distance);

  distanceElement.innerHTML = `<h2 class="${distanceHint.color}">${distanceHint.text}</h2>`;
  attempsElement.innerHTML = `<h3>Intentos: ${clicks}</h3>`;

  if (distance < 20) {
    alert(`Encontraste el tesoro en ${clicks} clicks!`);
    location.reload();
  }
});
