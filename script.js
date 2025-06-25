const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

document.addEventListener('DOMContentLoaded', () => {
  console.log("DOM fully loaded and parsed");
  const hamburger = document.querySelector('.hamburger');
  const menu = document.querySelector('.menu');

  if (hamburger && menu) {
    hamburger.addEventListener('click', () => {
      menu.classList.toggle('open');
    });
  }

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && menu) {
      menu.style.display = 'none';
    }
  });

  const joinImage = document.querySelector('.join-code-image');
  if (joinImage) {
    joinImage.addEventListener('click', () => {
      window.location.href = 'https://bookclubs.com/parks-pages-covers-coffee/join/'; // replace with your target URL
    });
  }
});
