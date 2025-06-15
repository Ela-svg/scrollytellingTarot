// === Jauge de progression ===
const indicator = document.querySelector('.step-indicator');
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const height = window.innerHeight;

  let position = 0;
  if (scrollY < height) {
    position = 0;
  } else if (scrollY < 2 * height) {
    position = 50;
  } else {
    position = 100;
  }
  indicator.style.left = `${position}%`;
});






const container = document.querySelector('.carousel-container');
const cards = document.querySelectorAll('.carousel img');


// === CAROUSEL ===
function updateCardsPosition() {
  const containerRect = container.getBoundingClientRect();
  const centerX = containerRect.left + containerRect.width / 2;

  let closestCard = null;
  let closestDistance = Infinity;

  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    const cardCenter = rect.left + rect.width / 2;
    const distance = Math.abs(centerX - cardCenter);

    // Appliquer la courbure : plus éloignée du centre = plus bas
    const maxOffset = 50;
    const offsetY = Math.min(distance / 3, maxOffset);
    card.style.transform = `translateY(${offsetY}px) scale(1)`;
    card.style.zIndex = 1;

    // Trouver la carte la plus proche du centre
    if (distance < closestDistance) {
      closestDistance = distance;
      closestCard = card;
    }
  });

  // Appliquer le zoom uniquement à la carte au centre
  if (closestCard) {
    closestCard.style.transform = `translateY(-30px) scale(1.25)`;
    closestCard.style.zIndex = 10;
  }
}

// Lancer le positionnement au scroll
container.addEventListener('scroll', () => {
  requestAnimationFrame(updateCardsPosition);
});

// Initialisation
window.addEventListener('load', updateCardsPosition);




window.addEventListener('load', () => {
  const section6           = document.querySelector('#section6');
  if (!section6) return;

  const textS6             = section6.querySelector('.textS6');
  const carteVisible       = section6.querySelector('.carte-visible-S6');
  const descriptionVisible = section6.querySelector('.card-description-S6');
  const carouselImgs       = Array.from(section6.querySelectorAll('.carousel img'));
  const chooseText         = section6.querySelector('.choose');

  // 0) On mémorise les src d’origine du carousel
  const initialCardSrcs = carouselImgs.map(img => img.src);

  // (toujours masqué / positionné via CSS)
  // carteVisible et descriptionVisible sont invisibles au load

  // 1) Au clic sur une carte du carousel :  
  carouselImgs.forEach((img, idx) => {
    img.addEventListener('click', () => {
      // a) chute de la carte
      carteVisible.classList.add('visible');
      descriptionVisible.classList.add('visible');
      // b) on masque le texte d’intro
      textS6.style.display = 'none';

      // c) swap vers les nouvelles cartes
      const newCardSrcs = [
        './images/Section-6/carte11-S6.svg',
        './images/Section-6/carte12-S6.svg',
        './images/Section-6/carte13-S6.svg',
        './images/Section-6/carte14-S6.svg',
        './images/Section-6/carte15-S6.svg',
        './images/Section-6/carte16-S6.svg',
        './images/Section-6/carte17-S6.svg',
        './images/Section-6/carte18-S6.svg',
        './images/Section-6/carte19-S6.svg',
        './images/Section-6/carte20-S6.svg'
      ];
      carouselImgs.forEach((card, i) => {
        if (newCardSrcs[i]) card.src = newCardSrcs[i];
      });
    });
  });

  // 2) Au clic sur “Choose a card” : tout reset instantané
  if (chooseText) {
    chooseText.addEventListener('click', () => {
      // a) on cache direct sans transition
      carteVisible.classList.remove('visible');
      descriptionVisible.classList.remove('visible');
      // b) on remet le carousel d’origine
      initialCardSrcs.forEach((src, i) => {
        carouselImgs[i].src = src;
      });
      // c) on réaffiche le texte  
      textS6.style.display = 'block';
    });
  }
});















// === Rotation de l'image .oeil-S3 dans la section 3 ===
window.addEventListener('scroll', () => {
  const image = document.querySelector('.oeil-S3');
  const section = document.querySelector('.section-3');

  if (!image || !section) return;

  const sectionTop = section.offsetTop;
  const sectionHeight = section.offsetHeight;
  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;

  if (scrollY + windowHeight >= sectionTop && scrollY < sectionTop + sectionHeight) {
    const scrollProgress = (scrollY + windowHeight - sectionTop) / (sectionHeight + windowHeight);
    const rotation = scrollProgress * 360;
    image.style.transform = `rotate(${rotation}deg)`;
  }
});

// === Rotation de l'image .methode2-img-S8 dans la section 8 ===
window.addEventListener('scroll', () => {
    const image = document.querySelector('.methode2-img-S8');
    const section = document.querySelector('.section-8'); 
  
    if (!image || !section) return;
  
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
  
    if (scrollY + windowHeight >= sectionTop && scrollY < sectionTop + sectionHeight) {
      const scrollProgress = (scrollY + windowHeight - sectionTop) / (sectionHeight + windowHeight);
      const rotation = scrollProgress * 360;
      image.style.transform = `rotate(${rotation}deg)`;
    }
  });
  
  // === Rotation de l'image .oeil-S10 dans la section 10 ===
window.addEventListener('scroll', () => {
    const image = document.querySelector('.oeil-S10');
    const section = document.querySelector('.section-10'); // Vérifie que ta section a bien cette classe
  
    if (!image || !section) return;
  
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
  
    if (scrollY + windowHeight >= sectionTop && scrollY < sectionTop + sectionHeight) {
      const scrollProgress = (scrollY + windowHeight - sectionTop) / (sectionHeight + windowHeight);
      const rotation = scrollProgress * 360;
      image.style.transform = `rotate(${rotation}deg)`;
    }
  });

  
  // === Rotation de l'image .oeil-S20 dans la section 20 ===
window.addEventListener('scroll', () => {
  const image = document.querySelector('.oeil-S20');
  const section = document.querySelector('.section-20');

  if (!image || !section) return;

  const sectionTop = section.offsetTop;
  const sectionHeight = section.offsetHeight;
  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;

  if (scrollY + windowHeight >= sectionTop && scrollY < sectionTop + sectionHeight) {
    const scrollProgress = (scrollY + windowHeight - sectionTop) / (sectionHeight + windowHeight);
    const rotation = scrollProgress * 360; // Tu peux augmenter ou réduire le facteur ici
    image.style.transform = `rotate(${rotation}deg)`;
  }
});
