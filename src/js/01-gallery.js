// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
// Opisany w dokumentacji
import SimpleLightbox from 'simplelightbox';
// Dodatkowy import stylów
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector('.gallery');

const galleryItem = galleryItems
  .map(
    item =>
      `
    <a class="gallery__item" href="${item.original}">
    <img 
    class="gallery__image" 
    src="${item.preview}" 
    
    alt="${item.description}" 
    </a>
    `
  )
  .join('');
// nadpisuję html
gallery.insertAdjacentHTML('beforeend', galleryItem);

var lightbox = new SimpleLightbox('.gallery a', {
  caption: true,
  captionsData: 'alt',
  captionDelay: 250,
  enableKeyboard: true,
});