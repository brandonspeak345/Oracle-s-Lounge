const track = document.querySelector(".carousel-track");
const cards = [...track.children];
const cardWidth = cards[0].offsetWidth + 20; // card width + margin
let position = 0;

// Clone first and last 3 cards
const cloneHead = cards.slice(0, 3).map((card) => card.cloneNode(true));
const cloneTail = cards.slice(-3).map((card) => card.cloneNode(true));

cloneHead.forEach((clone) => track.appendChild(clone));
cloneTail
  .reverse()
  .forEach((clone) => track.insertBefore(clone, track.firstChild));

position = 3 * cardWidth;
track.style.transform = `translateX(-${position}px)`;

// Controls
document.querySelector(".arrow.right").addEventListener("click", () => {
  position += cardWidth;
  track.style.transition = "transform 0.5s ease-in-out";
  track.style.transform = `translateX(-${position}px)`;

  if (position >= (cards.length + 3) * cardWidth) {
    setTimeout(() => {
      track.style.transition = "none";
      position = 3 * cardWidth;
      track.style.transform = `translateX(-${position}px)`;
    }, 500);
  }
});

document.querySelector(".arrow.left").addEventListener("click", () => {
  position -= cardWidth;
  track.style.transition = "transform 0.5s ease-in-out";
  track.style.transform = `translateX(-${position}px)`;

  if (position <= 0) {
    setTimeout(() => {
      track.style.transition = "none";
      position = cards.length * cardWidth;
      track.style.transform = `translateX(-${position}px)`;
    }, 500);
  }
});
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('flipped');
  });
});