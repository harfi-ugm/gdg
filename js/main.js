const images = [
  'image/furniture/yellow-sofa.png',
  'image/furniture/chair-grey.png'
];

let currentIndex = 0;

const mainImage = document.querySelector('.main-image img');
const thumbnails = document.querySelectorAll('.thumbnail-images img');
const leftNav = document.querySelector('.image-nav.left');
const rightNav = document.querySelector('.image-nav.right');

function updateMainImage(index) {
  // Update main image
  mainImage.src = images[index];

  // Remove active-thumbnail class from all thumbnails
  thumbnails.forEach(thumbnail => thumbnail.classList.remove('active-thumbnail'));

  // Add active-thumbnail class to the current thumbnail
  thumbnails[index].classList.add('active-thumbnail');
}

// Handle left navigation
leftNav.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateMainImage(currentIndex);
});

// Handle right navigation
rightNav.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateMainImage(currentIndex);
});

// Add click event for thumbnails
thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener('click', () => {
    currentIndex = index;
    updateMainImage(currentIndex);
  });
});

// Initialize the first thumbnail as active
updateMainImage(currentIndex);
