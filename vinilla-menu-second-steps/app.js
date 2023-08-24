const drop = document.querySelectorAll('.is-drop');

if (drop) {
   drop.forEach((drop) => {
      let parentEL = drop.closest('li');
      parentEL.classList.add('has-drop');
      let opener = parentEL.querySelector('.opener');

      opener.addEventListener('click', function (e) {
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
      });
   });
}
