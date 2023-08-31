const drop = document.querySelectorAll('.is-drop');

if (drop) {
   drop.forEach((drop) => {
      let parentEL = drop.closest('li');
      parentEL.classList.add('has-drop');
      let opener = parentEL.querySelector('.opener');

      opener.addEventListener('click', function (e) {
         parentEL.classList.toggle('active');
         e.preventDefault();

         drop
            .closest('ul')
            .querySelectorAll('li.has-drop')
            .forEach((elem) => {
               if (elem != parentEL) {
                  elem.classList.remove('active');
               }
            });
      });
   });
}
