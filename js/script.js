'use strict';

const map = L.map('map').setView([25.08287333972665, 121.56360253141968], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

L.marker([25.081969649905677, 121.56236871534183])
  .addTo(map)
  .bindPopup(`We're Here!`)
  .openPopup();

const yearEL = document.querySelector('.year');
const currentYear = new Date().getFullYear();
yearEL.textContent = currentYear;

const header = document.querySelector('.header');
const mainNav = document.querySelector('.main-nav');
const btnNav = document.querySelector('.btn-mobile-nav');

const allLinks = document.querySelectorAll('a:link');

btnNav.addEventListener('click', function (e) {
  e.preventDefault();
  header.classList.toggle('nav-open');
});

allLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const href = link.getAttribute('href');

    if (href === '#') {
      window.scrollTo({ top: 0, bottom: 'smooth' });
    }

    if (href !== '#' && href.startsWith('#')) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: 'smooth' });
    }
    if (link.classList.contains('main-nav-link'))
      header.classList.toggle('nav-open');
  });
});
