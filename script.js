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
    menu.classList.remove('open');
  }
});

  const joinImage = document.querySelector('.join-code-image');
  if (joinImage) {
    joinImage.addEventListener('click', () => {
      window.location.href = 'https://bookclubs.com/parks-pages-covers-coffee/join/'; // replace with your target URL
    });
  }
});
document.querySelectorAll('.book-hover-reveal').forEach(book => {
  book.addEventListener('click', () => {
    // On mobile, toggle flip
    if (window.innerWidth <= 768) {
      book.classList.toggle('flipped');
      const info = book.querySelector('.hover-info');
      if (info) {
        info.classList.toggle('active');
      }
    }
  });
});
