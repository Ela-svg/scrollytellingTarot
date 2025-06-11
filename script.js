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

// === Rotation image Section 1 ===
const section1 = document.querySelector('.section-1');
const rotatingImage = section1?.querySelector('.rotating-image');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (rotatingImage) {
        const section1Rect = section1.getBoundingClientRect();
        if (section1Rect.top <= 0 && section1Rect.bottom >= 0) {
            const rotationAngle = scrollY * 0.01;
            rotatingImage.style.transform = `rotate(${rotationAngle}deg)`;
        }
    }
});

// === Rotation image Section 2 ===
const section2Image = document.querySelector('.section-2-rotating');
window.addEventListener('scroll', () => {
    const section2 = document.querySelector('.section-2');
    if (section2 && section2Image) {
        const section2Rect = section2.getBoundingClientRect();
        if (section2Rect.top <= 0 && section2Rect.bottom >= 0) {
            const rotation = window.scrollY * 0.02;
            section2Image.style.transform = `rotate(${rotation}deg)`;
        }
    }
});

// === Rotation image Section 3 ===
const section3 = document.getElementById('section3');
const image3 = section3?.querySelector('.rotating-image');
window.addEventListener('scroll', () => {
    if (!image3 || !section3) return;
    const sectionTop = section3.offsetTop;
    const sectionHeight = section3.offsetHeight;
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;

    if (scrollY + windowHeight >= sectionTop && scrollY < sectionTop + sectionHeight) {
        const scrollProgress = (scrollY + windowHeight - sectionTop) / (sectionHeight + windowHeight);
        const rotation = scrollProgress * 360;
        image3.style.transform = `rotate(${rotation}deg)`;
    }
});

// === Section 6 : Carousel dynamique ===
const section6 = document.querySelector('#section6');
const container = document.querySelector('.carousel-container');
const carousel = document.querySelector('.carousel');
const cards = document.querySelectorAll('.carousel img');
const textS6 = document.querySelector('.textS6');
const chooseText = document.querySelector('.choose');

// Fonction : animation + zoom carte sélectionnée
function expandCard(card) {
  const clone = card.cloneNode(true);
  clone.classList.add('card-expanded');
  document.body.appendChild(clone);

  // Masquer le texte principal
  textS6.classList.add('section6-hidden');
  chooseText.classList.add('section6-hidden');

  // Afficher la description
  const description = document.querySelector('.card-description-container');
  description.style.display = 'block';

  textS6.classList.add('section6-hidden');
// NE MASQUE PAS le carousel

}

// Détection de la carte centrale et animation
function detectCenterCard() {
    const containerRect = container.getBoundingClientRect();
    const centerX = containerRect.left + containerRect.width / 2;

    let closestCard = null;
    let closestDistance = Infinity;

    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.left + rect.width / 2;
        const distance = Math.abs(centerX - cardCenter);

        const maxOffset = 50;
        const offsetY = Math.min(distance / 3, maxOffset);
        card.style.transform = `translateY(${offsetY}px) scale(1)`;
        card.style.zIndex = 1;

        if (distance < closestDistance) {
            closestDistance = distance;
            closestCard = card;
        }
    });

    if (closestCard) {
        closestCard.style.transform = `translateY(-30px) scale(1.25)`;
        closestCard.style.zIndex = 10;

        closestCard.addEventListener('click', () => {
            expandCard(closestCard);
        }, { once: true });
    }
}

container.addEventListener('scroll', () => {
    requestAnimationFrame(detectCenterCard);
});
window.addEventListener('load', detectCenterCard);

function expandCard(card) {
  const clone = card.cloneNode(true);
  clone.classList.add('card-expanded');
  document.body.appendChild(clone);

  // Masquer uniquement le texte principal
  textS6.classList.add('section6-hidden');

  // Laisser .choose visible

  // Afficher le titre + description de la carte
  const description = document.querySelector('.card-description-container');
  description.style.display = 'block';
}


