var c1 = document.getElementById('c1');

var c2 = document.getElementById('c2');

var c3 = document.getElementById('c3');

var c4 = document.getElementById('c4');

var c5 = document.getElementById('c5');

var c6 = document.getElementById('c6');

var c7 = document.getElementById('c7');

var c8 = document.getElementById('c8');

var c9 = document.getElementById('c9');

var c0 = document.getElementById('c0');

var b1 = document.getElementById('b1');

var b2 = document.getElementById('b2');

var b3 = document.getElementById('b3');

var b5 = document.getElementById('b5');

var b4 = document.getElementById('b4');

var b6 = document.getElementById('b6');

c1.addEventListener('touchstart', main);
c2.addEventListener('touchstart', main);
c3.addEventListener('touchstart', main);

c4.addEventListener('touchstart', main);
c5.addEventListener('touchstart', main);
c6.addEventListener('touchstart', main);

c7.addEventListener('touchstart', main);
c8.addEventListener('touchstart', main);
c9.addEventListener('touchstart', main);

c0.addEventListener('touchstart', main);

var body = document.getElementsByTagName('body')[0];

i = 0;

function main() {
  i += 1;
  if (i == 1) {
    b1.style.backgroundColor = 'white';
  }
  if (i == 2) {
    b2.style.backgroundColor = 'white';
  }

  if (i == 3) {
    b3.style.backgroundColor = 'white';
  }

  if (i == 4) {
    b4.style.backgroundColor = 'white';
  }

  if (i == 5) {
    b5.style.backgroundColor = 'white';
  }

  if (i == 6) {
    b6.style.backgroundColor = 'white';

    body.style.backgroundColor = 'white';
  }
}
