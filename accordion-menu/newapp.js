const menu = document.querySelectorAll('.menu');
const screenSize = window.matchMedia('(min-width: 1024px)');

if (menu) {
   menu.forEach((menu) => {
      let menuOpener = menu.querySelectorAll('.menu__opener');
      if (menuOpener) {
         menuOpener.forEach((btn) => {
            let menuContent = btn.nextElementSibling;
            let parent = btn.closest('li');

            runMenu();
            screenSize.addEventListener('change', runMenu);

            function runMenu() {
               if (!screenSize.matches) {
                  parent.classList.add('menu__item');
                  menuContent.setAttribute(
                     'style',
                     'transition-duration: 600ms; height: 0px;'
                  );
                  btn.addEventListener('click', handelMenu);
               } else {
                  destroy();
               }
            }
            function handelMenu(e) {
               e.preventDefault();
               parent.classList.toggle('menu__active');

               if (
                  parent.classList.contains('menu__active') &&
                  menuContent.hasAttribute('style', 'height: 0px')
               ) {
                  menuContent.style.height = menuContent.scrollHeight + 'px';

                  setTimeout(() => {
                     menuContent.style.height = 'auto';
                  }, 600);
               } else if (
                  !parent.classList.contains('menu__active') &&
                  menuContent.hasAttribute('style', 'height: auto')
               ) {
                  menuContent.style.height = menuContent.scrollHeight + 'px';
                  setTimeout(() => {
                     menuContent.style.height = 0 + 'px';
                  }, 1);
               }

               let relativeUl = e.target.closest('ul');
               let allMenuItem = relativeUl.querySelectorAll('li.menu__item');
               allMenuItem.forEach((elm) => {
                  if (elm !== parent) {
                     elm.classList.remove('menu__active');
                     let inActiveContent =
                        elm.querySelectorAll('.menu__content');
                     inActiveContent.forEach((content) => {
                        content.style.height = content.scrollHeight + 'px';
                        setTimeout(() => {
                           content.style.height = 0 + 'px';
                        }, 1);
                     });
                  }
               });
            }
            function destroy() {
               btn.removeEventListener('click', handelMenu);
               if (parent.classList.contains('menu__active')) {
                  parent.classList.remove('menu__active');
               }
               menuContent.removeAttribute('style');
            }
         });
      }
   });
}
