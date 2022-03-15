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
}