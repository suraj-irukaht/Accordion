const drop = document.querySelectorAll('.is-drop');
const screenSize = window.matchMedia('(max-width: 1023px)');

if (drop) {
   drop.forEach((drop) => {
      let parentEL = drop.closest('li');
      let opener = parentEL.querySelector('.opener');

      run();
      screenSize.addEventListener('change', run);

      function run() {
         if (screenSize.matches) {
            parentEL.classList.add('has-drop');
            opener.addEventListener('click', clickEvent);
         } else {
            destroy();
         }
      }

      function clickEvent(e) {
         parentEL.classList.toggle('active');
         e.preventDefault();
         let parent = this.parentElement.parentElement.parentElement;
         let dropEl = this.nextElementSibling;
         if (dropEl.style.maxHeight) {
            dropEl.style.maxHeight = null;
         } else {
            dropEl.style.maxHeight = dropEl.scrollHeight + 'px';
            parent.style.maxHeight =
               parseInt(parent.style.maxHeight) + dropEl.scrollHeight + 'px';
         }

         drop
            .closest('ul')
            .querySelectorAll('li.has-drop')
            .forEach((elem) => {
               if (elem != parentEL) {
                  elem.classList.remove('active');
                  const activeDrop = elem.querySelectorAll('.is-drop');
                  activeDrop.forEach((element) => {
                     if (element.style.maxHeight) {
                        element.style.maxHeight = null;
                     }
                  });
               }
            });
      }

      function destroy() {
         opener.removeEventListener('click', clickEvent);
         if (parentEL.classList.contains('active')) {
            parentEL.classList.remove('active');
         }
         drop.removeAttribute('style');
      }
   });
}
