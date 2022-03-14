/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Lazy } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Инициализация слайдеров
function initSliders() {
	// Перечень слайдеров
	// Проверяем, есть ли слайдер на стронице
	if (document.querySelector('.widget-blog__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.widget-blog__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Lazy],
			observer: true,
			observeParents: true,
			slidesPerView: 1.1,
			spaceBetween: 10,
			autoHeight: false,
			speed: 800,
			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			watchOverflow: true,
			preloadImages: true,
			lazy: {
				loanOnTransitionStart: true,
				loadPrevNext: true,
			},

			// Пагинация
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			/* navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next',
			}, */

			// Брейкпоинты

			breakpoints: {
				479.98: {
					slidesPerView: 1.6,
					spaceBetween: 15,
				},
				574.98: {
					slidesPerView: 2.2,
					spaceBetween: 15,
				},
				767.98: {
					slidesPerView: 2.7,
					spaceBetween: 26,
				},
				991.98: {
					slidesPerView: 3,
					spaceBetween: 26,
				},
				1199.98: {
					slidesPerView: 4,
					spaceBetween: 26,
				},
			},

			// События
			on: {

			}
		});
	}

	if (document.querySelector('.partners__slider')) { // Указываем скласс нужного слайдера

		let parnersSlider;

		let partnersMd2 = window.matchMedia('(max-width: 991.98px)');
		function partnersHandleMd2Change(e) {
			if (e.matches) {
				// Создаем слайдер
				parnersSlider = new Swiper('.partners__slider', { // Указываем скласс нужного слайдера
					// Подключаем модули слайдера
					// для конкретного случая
					modules: [Lazy],
					observer: true,
					observeParents: true,
					slidesPerView: 2.4,
					spaceBetween: 20,
					autoHeight: false,
					speed: 800,
					//touchRatio: 0,
					//simulateTouch: false,
					loop: true,
					watchOverflow: true,
					preloadImages: true,
					lazy: {
						loanOnTransitionStart: true,
						loadPrevNext: true,
					},
					// Брейкпоинты

					breakpoints: {
						479.98: {
							slidesPerView: 3,
							spaceBetween: 20,
						},
						574.98: {
							slidesPerView: 4,
							spaceBetween: 20,
						},
						767.98: {
							slidesPerView: 5,
							spaceBetween: 26,
						},
					},

					// События
					on: {

					}
				});
			}
			else {
				let partnersItems = document.querySelectorAll('.partners__item');
				partnersItems.forEach(element => {
					const elementImage = element.querySelector('img');
					const elementImageSrc = elementImage.dataset.src;
					elementImage.src = elementImageSrc;
				});
			}
		}
		partnersMd2.addEventListener('change', partnersHandleMd2Change);
		partnersHandleMd2Change(partnersMd2);
	}

	if (document.querySelector('.reviews__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.reviews__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Lazy, Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 15,
			autoHeight: false,
			speed: 800,
			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			watchOverflow: true,
			initialSlide: 1,
			centeredSlides: true,

			// Ленивая загрузка
			preloadImages: true,
			lazy: {
				loanOnTransitionStart: true,
				loadPrevNext: true,
			},

			// Пагинация
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next',
			},

			// Брейкпоинты

			breakpoints: {
				574.98: {
					slidesPerView: 1.2,
					spaceBetween: 30,
				},
				767.98: {
					slidesPerView: 1.3,
					spaceBetween: 100,
				},
				991.98: {
					slidesPerView: 1.5,
					spaceBetween: 156,
				},
				1440.98: {
					slidesPerView: 2,
					spaceBetween: 156,
				},
				1920.98: {
					slidesPerView: 2.5,
					spaceBetween: 156,
				},
			},

			// События
			on: {

			}
		});
	}
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});