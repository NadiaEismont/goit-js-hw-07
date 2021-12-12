import { galleryItems } from './gallery-items.js';
// Change code below this line



const refs = {
    gallery: document.querySelector('.gallery'),

}

function createGallery() {
    return galleryItems.map(({ preview, original, description }) =>
    (`<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`)).join('');
}
refs.gallery.insertAdjacentHTML('afterbegin', createGallery())

let lightbox = new SimpleLightbox('.gallery__item', {
    captionsData: "alt",
    captionDelay: 250
});


// function onOpenModal(e) {
//     e.preventDefault()
//     lightbox.open();
//     if (e.currentTarget === e.target) {
//         return;
//     }
//     document.addEventListener('keydown', onEscKeyPress);
// }

// function onModalClose(e) {
//     lightbox.close();
//     document.removeEventListener('keydown', onEscKeyPress);

// }

// function onEscKeyPress(e) {
//     if (e.code === 'Escape') {
//         onModalClose();
//     }
// }



refs.gallery.addEventListener('click', onOpenModal);

