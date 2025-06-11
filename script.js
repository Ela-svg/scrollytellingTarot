
const indicator = document.querySelector('.step-indicator');
const rotatingImage = document.querySelector('.rotating-image');

// Variables pour calculer la rotation en fonction du scroll
let rotationAngle = 0;

// Écouter le scroll
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const height = window.innerHeight;

    // 1. Jauge de progression 
    let position = 0;

    if (scrollY < height) {
        position = 0; // Section 1
    } else if (scrollY < 2 * height) {
        position = 50; // Section 2
    } else {
        position = 100; // Section 3
    }

    // Déplace le point sur la jauge
    indicator.style.left = `${position}%`;


    // 2. Rotation de l'image dans la section 1

    const section1 = document.querySelector('.section-1');
    const section1Rect = section1.getBoundingClientRect();

    // Vérifie si l'utilisateur est toujours dans la section 1
    if (section1Rect.top <= 0 && section1Rect.bottom >= 0) {
        // L'intensité de la rotation en fonction du scroll
        rotationAngle += scrollY * 0.01; 
        rotatingImage.style.transform = `rotate(${rotationAngle}deg)`;
    }
});

// Rotation pour la section 2 
const section2Image = document.querySelector('.section-2-rotating');
let section2Rotation = 0;

window.addEventListener('scroll', () => {
  const section2 = document.querySelector('.section-2');
  const section2Rect = section2.getBoundingClientRect();

  if (section2 && section2Image && section2Rect.top <= 0 && section2Rect.bottom >= 0) {
    section2Rotation += window.scrollY * 0.02;
    section2Image.style.transform = `rotate(${section2Rotation}deg)`;
  }
});

const section3 = document.getElementById('section3');
const image3 = section3.querySelector('.rotating-image');

function rotateImageInSection(section, image) {
  const sectionTop = section.offsetTop;
  const sectionHeight = section.offsetHeight;
  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;

  if (scrollY + windowHeight > sectionTop && scrollY < sectionTop + sectionHeight) {
    const progress = (scrollY + windowHeight - sectionTop) / (sectionHeight + windowHeight);
    const rotation = (progress - 0.5) * 2 * 180; 
    image.style.transform = `rotate(${rotation}deg)`;
  }
}

window.addEventListener('scroll', () => {
  rotateImageInSection(section1, image1);
  rotateImageInSection(section2, image2);
  rotateImageInSection(section3, image3);
});

window.addEventListener('scroll', () => {
    const image = document.getElementById('rotating-section3');
    const section = document.getElementById('section3');
  
    if (!image || !section) return;
  
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
  
    
    if (scrollY + windowHeight >= sectionTop && scrollY < sectionTop + sectionHeight) {
      const scrollProgress = (scrollY + windowHeight - sectionTop) / (sectionHeight + windowHeight);
      const rotation = scrollProgress * 360; // 
      image.style.transform = `rotate(${rotation}deg)`;
    }
  });
  
  const container = document.querySelector('.carousel-container');
  const cards = document.querySelectorAll('.carousel img');
  
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
      closestCard.style.transform = `translateY(-30px) scale(1.2)`;
      closestCard.style.zIndex = 10;
    }
  }
  
  // Lancer le positionnement au scroll
  container.addEventListener('scroll', () => {
    requestAnimationFrame(updateCardsPosition);
  });
  
  // Initialisation
  window.addEventListener('load', updateCardsPosition);
  