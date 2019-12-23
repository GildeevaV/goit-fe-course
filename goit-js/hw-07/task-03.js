"use strict";
// Напиши скрипт для создания галлереи изображений по массиву данных.

// В HTML есть список ul#gallery.

// <ul id="gallery"></ul>
// Используй массив объектов images для создания тегов img вложенных в li. Для создания разметки используй шаблонные строки и insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.

const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat"
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish"
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running"
  }
];

class Gallery {
  constructor(images) {
    this.images = images;
    const tempContainer = document.createDocumentFragment();
    this.images.forEach(element => {
      const currentLi = document.createElement("li");
      const currentImage = document.createElement("img");
      currentImage.setAttribute("src", element.url);
      currentImage.setAttribute("alt", element.alt);
      currentImage.setAttribute("width", "200px");
      currentLi.appendChild(currentImage);
      tempContainer.appendChild(currentLi);
    });
    const gallery = document.querySelector("#gallery");
    gallery.append(tempContainer);
  }
}

const ourGallery = new Gallery(images);
class newGallery {
  constructor(images) {
    this.images = images;
  }
  addToContainer = galleryCssSelector => {
    const container = document.querySelector(galleryCssSelector);
    const htmlTemplate = this.images.reduce((acc, value) => {
      acc += `<li><img src="${value.url}" alt="${value.alt}" width="300px"></li>`;
      return acc;
    }, "");
    // console.log(container);
    // container.insertAdjacentHTML("afterbegin", htmlTemplate);
  };
}
const newOurGallery = new newGallery(images);
newOurGallery.addToContainer(".divG");
