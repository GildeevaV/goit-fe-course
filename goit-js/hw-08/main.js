"use strict";
import galleryItems from "./gallery-items.js";
const galleryList = document.querySelector(".js-gallery");
const lightBox = document.querySelector(".lightbox");
const lightBoxImage = document.querySelector(".lightbox__image");
const addItems = galleryItems.reduce((acc, item) => {
  return (acc += `<li class="gallery__item">
<a
  class="gallery__link"
  href="${item.original}"
>
  <img
    class="gallery__image"
    src="${item.preview}"
    data-source="${item.original}"
    alt="${item.description}"
  />
</a>
</li>`);
}, "");
galleryList.insertAdjacentHTML("afterbegin", addItems);
galleryList.addEventListener("click", handleClick);
lightBox.addEventListener("click", handleClose);
document.addEventListener("keydown", handleKeyPress);
function handleClick(e) {
  e.preventDefault();
  lightBox.classList.add("is-open");
  lightBoxImage.src = e.target.dataset.source;
}
function handleClose(e) {
  e.preventDefault();
  if (e.target === lightBoxImage) {
    return;
  }
  lightBox.classList.remove("is-open");
  lightBoxImage.src = "";
}
function allowedKey(key){
    const ALLOWED_KEYS = ['Escape','ArrowRight','ArrowLeft'];
    return ALLOWED_KEYS.includes(key);
}
function handleKeyPress(e) {
    if(!allowedKey(e.code)){
        return;
    }
    
  if (e.code === "Escape") {
    lightBox.classList.remove("is-open");
    lightBoxImage.src = "";
    return;
  }
  let idx;
  const currentImg = galleryItems.find((item, _idx) => {
    idx = _idx;
    return item.original === lightBoxImage.src;
  });
  if (e.code === "ArrowRight") {
    idx += 1;
  }
  if (e.code === "ArrowLeft") {
    idx -= 1;
  }
  if (idx < 0) {
    idx = galleryItems.length - 1;
  }
  if (idx > galleryItems.length - 1) {
    idx = 0;
  }
  lightBoxImage.src = galleryItems[idx].original;
}







// 'use strict';

// import galleryItems from '/gallery-items.js';

// console.log(galleryItems);

// const galleryList = document.querySelector('.js-gallery');
// const lightBox = document.querySelector('.lightbox');


// const addItems = galleryItems.reduce((acc, item) => {acc += `<li class="gallery__item">
// <a
//   class="gallery__link"
//   href="${item.original}"
// >
//   <img
//     class="gallery__image"
//     src="${item.preview}"
//     data-source="${item.original}"
//     alt="${item.description}"
//   />
// </a>
// </li>`} );

// galleryList.insertAdjacentHTML('afterbegin', addItems);

// // console.log(addItems);

// galleryList.addEventListener('click', handleClick);
// galleryList.addEventListener('click', handleClose);
// closemodal.addEventListener('click', handleClose);
// document.addEventListener('keydown', handleEscClose);


// function handleClick(e) {
//     e.preventDefault();
//     lightbox.classList.add('is-open');
//     lightBoxImage.src = e.target.dataset.source;
// }

// function handleClose(e) {
//     e.preventDefault();
//     if(e.target === 'Escape') 
//     lightBox.classList.remove('is-open');
//     lightBoxImage.src = '';
//     return;
// }

// if (e.code === 'ArrowRight') {
//     console.log(lightBoxImage.src);
//     const currentImg = galleryItems.find((item, idx, array ) => {return array.indexOf(item.original)});
//     console.log(currentImg);
// }
