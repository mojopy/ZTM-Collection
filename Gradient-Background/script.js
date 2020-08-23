// Var initiating.
const css = document.querySelector("h3");
const body = document.querySelector("body");
const btns = document.querySelector("#buttons");
const random = document.querySelector("#random");
const rotate = document.querySelector("#rotate");
const color1 = document.getElementsByName("color1");
const color2 = document.getElementsByName("color2");

// Oh no, a global variable...Ideally, you would keep this within its own scope.
let angle = 0;

function setGradient() {
  // Paste the new style with (possibly) new degrees, and new colors in!
  body.style.background = "linear-gradient(" + angle + "deg, " + color1[0].value + ", " + color2[0].value + ")";

  // Constantly update the bottom text w/ the new css style.
  css.textContent = body.style.background;
}

// Generates hex codes within color parameters (000000 to ffffff)
// Expression graciously stolen off a comment at https://www.paulirish.com/2009/random-hex-color-code-snippets/ & adjusted slightly.
function randomizeColors() {
  color1[0].value = '#' + ((Math.random()*(1<<24)|0) + "000000").toString(16).slice(2, 8).slice(-6);
  color2[0].value = '#' + ((Math.random()*(1<<24)|0) + "000000").toString(16).slice(2, 8).slice(-6);
  setGradient();
}

function rotateBackground() {
  // Degrees handler, values increments adjusted to what felt best to me.
  if (angle >= 360) {
    angle = 5;
  } else if (angle < 360) {
    angle += 5;
  }

  setGradient();
}
// Hacky-hack to immediately show the css text.
setGradient();

// Listen to user input for color picking.
color1[0].addEventListener("input", setGradient);
color2[0].addEventListener("input", setGradient);

// Listen to button clicks.
random.addEventListener("click", randomizeColors);
rotate.addEventListener("click", function() {
  // Constantly call the func to keep it rotating, or clear the timer.
  if (rotate.interval) {
    clearInterval(rotate.interval);
    rotate.interval = null;
  } else {
    rotate.interval = setInterval(rotateBackground, 25);
  }
});

// Listen to keypress to hide the UI.
document.addEventListener("keypress", function(event) {
  // Listen for either lowercase or uppercase H key.
  if (event.which === 104 || event.which === 72) {
    if (btns.classList.value === 'show') {
      btns.classList.add('hide');
      btns.classList.remove('show');
    } else {
      btns.classList.add('show');
      btns.classList.remove('hide');
    }
  }
})
