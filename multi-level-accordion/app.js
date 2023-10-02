const acc = document.querySelectorAll('.acc');

if (acc) {
   acc.forEach((acc) => {
      let accOpener = acc.querySelectorAll('.acc__opener');
      if (accOpener) {
         accOpener.forEach((btn) => {
            let accContent = btn.nextElementSibling;
            let parent = btn.closest('.acc__item');
            accContent.setAttribute(
               'style',
               'transition-duration: 600ms; height: 0px;'
            );

            btn.addEventListener('click', (e) => {
               e.preventDefault();
               parent.classList.toggle('acc__active');

               if (
                  parent.classList.contains('acc__active') &&
                  accContent.hasAttribute('style', 'height: 0px')
               ) {
                  accContent.style.height = accContent.scrollHeight + 'px';

                  setTimeout(() => {
                     accContent.style.height = 'auto';
                  }, 600);
               } else if (
                  !parent.classList.contains('acc__active') &&
                  accContent.hasAttribute('style', 'height: auto')
               ) {
                  accContent.style.height = accContent.scrollHeight + 'px';
                  setTimeout(() => {
                     accContent.style.height = 0 + 'px';
                  }, 1);
               }

               let relativeAcc = e.target.closest('.acc__hold');
               let allAccItem = relativeAcc.querySelectorAll('.acc__item');
               allAccItem.forEach((elm) => {
                  if (elm !== parent) {
                     elm.classList.remove('acc__active');
                     let inActiveContent =
                        elm.querySelectorAll('.acc__content');
                     inActiveContent.forEach((content) => {
                        content.style.height = content.scrollHeight + 'px';
                        setTimeout(() => {
                           content.style.height = 0 + 'px';
                        }, 1);
                     });
                  }
               });
            });
         });
      }
   });
}
