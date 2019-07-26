'use strict';

import { pathToFileURL } from 'url';

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
   window.addEventListener('load', function() {
      navigator.serviceWorker.register('serviceworker.js').then(
         function(registration) {
            // Registration was successful
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
         },
         function(err) {
            // registration failed :(
            console.log('ServiceWorker registration failed: ', err);
         }
      );
   });
}

// place your code below

const buttonAdd = document.querySelector('.button-add--js');
const buttonRemove = document.querySelector('.button-remove--js');
const value = document.querySelector('.counter__value--js');
const key = new Date().toISOString().slice(0, 10);
// const key = new Date().getDay();
const waterColor = document.querySelector('.waterColor');
const fillColors = [
   'rgb(169, 175, 185)',
   'rgb(140, 159, 190)',
   'rgb(107, 141, 197)',
   'rgb(60, 111, 192)',
   'rgb(19, 83, 187)',
   'red'
];
const waterIcon = document.querySelector('.fileSvg');

// $('body').bind('touchmove', function(event) {
//    event.preventDefault();
// });

// function AllowZoom(flag) {
//    if (flag == true) {
//       $('head meta[name=viewport]').remove();
//       $('head').prepend(
//          '<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=10.0, minimum-scale=1, user-scalable=1" />'
//       );
//    } else {
//       $('head meta[name=viewport]').remove();
//       $('head').prepend(
//          '<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=0" />'
//       );
//    }
// }

//AllowZoom(true);

var countOfGlass = 0;

function changeScreen(ilosc) {
   if (ilosc < 3 && ilosc >= 0) {
      waterColor.setAttribute('fill', fillColors[0]);
      waterIcon.setAttribute('src', 'assets/img/f1.svg');
   } else if (ilosc < 6 && ilosc >= 3) {
      waterColor.setAttribute('fill', fillColors[1]);
      waterIcon.setAttribute('src', 'assets/img/f2.svg');
   } else if (ilosc < 9 && ilosc >= 6) {
      waterColor.setAttribute('fill', fillColors[2]);
      waterIcon.setAttribute('src', 'assets/img/f3.svg');
   } else if (ilosc < 14 && ilosc >= 9) {
      waterColor.setAttribute('fill', fillColors[4]);
      waterIcon.setAttribute('src', 'assets/img/f4.svg');
   } else {
      waterColor.setAttribute('fill', fillColors[5]);
      waterIcon.setAttribute('src', 'assets/img/f5.svg');
   }
}

var x = 0;

if (!localStorage.getItem(key)) {
   localStorage.setItem(key, 0);
   value.innerHTML = '0';
   countOfGlass = 0;
} else {
   value.innerHTML = localStorage.getItem(key);
   countOfGlass = localStorage.getItem(key);
}

changeScreen(countOfGlass);

buttonAdd.addEventListener('click', e => {
   localStorage.setItem(key, parseInt(localStorage.getItem(key)) + 1);
   // value.innerHTML = parseInt(value.innerHTML) + 1;
   value.innerHTML = localStorage.getItem(key);
   changeScreen(countOfGlass);
   countOfGlass++;

   // testy

   // if (x < 6) {
   //    waterColor.setAttribute("fill", fillColors[x]);
   //    x++;
   // } else x = 0;

   // waterIcon.setAttribute("src", "../assets/img/f2.svg");
});

buttonRemove.addEventListener('click', e => {
   const currentValue = parseInt(localStorage.getItem(key));
   if (currentValue > 0) {
      localStorage.setItem(key, localStorage.getItem(key) - 1);
      value.innerHTML = localStorage.getItem(key);
      changeScreen(countOfGlass);
      countOfGlass--;
   }

   // const currentValue = parseInt(value.innerHTML);
   // if (currentValue > 0) {
   //    value.innerHTML = currentValue - 1;
   // }
});
