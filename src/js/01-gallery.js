import { galleryItems } from './gallery-items.js';
// Change code below this line
const instance = basicLightbox.create(`
    <div class="modal">
         <img src="">
    </div>
`);


const refs = {
    gallery: document.querySelector('.gallery'),
    modal: instance.element().querySelector('img'),
}

function createGallery() {
    return galleryItems.map(({ preview, original, description }) => (`<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`)).join('');
}
refs.gallery.insertAdjacentHTML('afterbegin', createGallery())

function onOpenModal(e) {
    e.preventDefault()
    if (e.currentTarget === e.target) {
        return;
    }
    refs.modal.src = e.target.dataset.source;
    document.addEventListener('keydown', onEscKeyPress);

    instance.show()
}

function onModalClose(e) {
    document.removeEventListener('keydown', onEscKeyPress);
    instance.close()
}

function onEscKeyPress(e) {
    if (e.code === 'Escape') {
        onModalClose();
    }
}


refs.modal.addEventListener('click', onModalClose);
refs.gallery.addEventListener('click', onOpenModal);
console.log(galleryItems);
