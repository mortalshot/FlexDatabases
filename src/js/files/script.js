// Подключение функционала 
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

window.onload = function () {
    // Изменения объектов при клике
    document.addEventListener("click", documentActions);
    function documentActions(e) {
        const targetElement = e.target;

        if (window.innerWidth > 768) {
            if (targetElement.classList.contains('menu__arrow')) {
                let hoverItems = document.querySelectorAll('.menu__item._hover');

                hoverItems.forEach(element => {
                    element.classList.remove('_hover');
                });

                targetElement.closest('.menu__item').classList.add('_hover');
            }
            if (!targetElement.closest('.menu__item') && document.querySelectorAll('.menu__item._hover').length > 0) {
                let hoverItems = document.querySelectorAll('.menu__item._hover');

                hoverItems.forEach(element => {
                    element.classList.remove('_hover');
                });
            }
        }
    }

    // Раскрываем видео на полный экран
    document.addEventListener("beforePopupOpen", function (e) {
        const currentPopup = e.detail.popup;

        const focusEl = currentPopup.lastFocusEl
        const videoSrc = focusEl.dataset.popupVideo;

        if (videoSrc) {
            const popup = document.querySelector(currentPopup._dataValue);
            const videoPlace = popup.querySelector('[data-video-place]');

            videoPlace.innerHTML = '';

            const videoDiv = document.createElement('div');
            videoDiv.className = 'popup__video';
            videoDiv.innerHTML = `<video muted="" loop="" autoplay> <source src="${videoSrc}" type="video/mp4"> </video>`;

            videoPlace.prepend(videoDiv);
        }
    });

    // Создаем навигационное меню на странице блога
    const blogContent = document.querySelector('.blog-content');
    if (blogContent) {
        const titles = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
        const articleContents = document.querySelector('.article-contents__list');

        if (titles.length > 0) {
            let headingLength = 0;
            titles.forEach(title => {
                const titleID = title.id;

                if (titleID) {
                    const titleText = title.textContent;

                    const newItem = document.createElement('li');
                    newItem.innerHTML = `<a href="" data-goto="#${titleID}" data-goto-header>${titleText}</a>`;

                    articleContents.append(newItem);

                    headingLength++;
                }
            });

            if (headingLength <= 0) {
                document.querySelector('.article-contents').style.display = "none";
            }
        }
    }
}