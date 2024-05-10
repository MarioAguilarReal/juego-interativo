const WIDTH = 1000;
const HEIGHT = 600;

let target = {
  x: getRandomNumber(WIDTH),
  y: getRandomNumber(HEIGHT)
};

let mapElement = $('#map');
let distanceElement = $('#distance');
let attempsElement = $('#attemps');
let toleranceElement = $('#tolerance');
let toleranceInput = $('#toleranceInput');

let clicks = 0;
let tolerance = 40;


mapElement.click(function(e) {
  clicks++;
  let distance = getDistance(e, target);
  let distanceHint = getDistanceHint(distance);
  console.log(distanceHint);

  distanceElement.html(`<p>${distanceHint.text}</p>`);
  attempsElement.html(`<p>Intentos: ${clicks}</p>`);
  toleranceElement.html(`<p>${tolerance}</p>`);
  toleranceInput.val(tolerance);

  if (distance < tolerance) {
    alert(`Encontraste el tesoro en ${clicks} clicks!`);
    location.reload();
  }
});


toleranceInput.change(function() {
  tolerance = parseInt(this.value);
  console.log(tolerance);
});
