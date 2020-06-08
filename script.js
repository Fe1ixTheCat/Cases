var x = 3;
var b = document.getElementById('attempt');
b.innerHTML = x;

function getRandom() {
  var a = Math.random().toFixed(2) * 100;
  return a;
}

function buttonClicker() {
  r.style.display = "none";
}

function buttonFixed() {
  r.style.display = "block";
}

function start() {
  f = document.getElementById('case');
  r = document.getElementById('clicker');
  f.src = "img/opened.png";
  buttonClicker();
  setTimeout(getWeapon, 1000)

}

function getWeapon() {
  if (x > 0) {
    c = +getRandom().toFixed(0);
    x = x - 1;
    b.innerHTML = x;
    console.log(c);
    f = document.getElementById('case');
    f.src = "img/opened.png";
    buttonFixed()

    if (c == 0) {
      f.src = "img/sniper.png";
    } else if (c > 0 && c < 10) {
      switch (c) {
        case 1:
        case 2:
        case 3:
          f.src = "img/machineGun.png";
          buttonFixed()
          break;
        case 4:
        case 5:
        case 6:
          f.src = "img/rifle.png";
          buttonFixed()
          break;
        case 7:
        case 8:
        case 9:
          f.src = "img/aug.png";
          buttonFixed()
          break;
        default:

      }
    } else if (c >= 10 && c < 20) {
      switch (c) {
        case 10:
        case 11:
        case 12:
        case 13:
        case 14:
        f.src = "img/uzi.png";
        buttonFixed()
          break;
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
        f.src = "img/smg.png";
        buttonFixed()
          break;
        default:

      }
    } else if (c >= 20 && c < 50) {
      if (c <= 34) {
        f.src = "img/pistol.png";
        buttonFixed()
      } else {
        f.src = "img/grenade.png";
        buttonFixed()
      }
    } else {
      f.src = "img/money.png";
      buttonFixed()
    }
  } else {
    alert("You don't have more attempts!")
  }
}
