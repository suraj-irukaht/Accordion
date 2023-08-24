console.log('ok');
document.addEventListener('DOMContentLoaded', function (event) {
   var acc = document.getElementsByClassName('faq-accordion');
   var panel = document.getElementsByClassName('faq-panel');
   for (var i = 0; i < acc.length; i++) {
      acc[i].onclick = function () {
         var setClasses = !this.classList.contains('active');
         setClass(acc, 'active', 'remove');
         setClass(panel, 'show', 'remove');
         if (setClasses) {
            this.classList.toggle('active');
            this.nextElementSibling.classList.toggle('show');
         }
      };
   }
   function setClass(els, className, fnName) {
      for (var i = 0; i < els.length; i++) {
         els[i].classList[fnName](className);
      }
   }
});

document.addEventListener('DOMContentLoaded', function (event) {
   var acc = document.getElementsByClassName('mobile-faq-menu');
   var panel = document.getElementsByClassName('mobile-faq-panel');
   for (var i = 0; i < acc.length; i++) {
      acc[i].onclick = function () {
         var setClasses = !this.classList.contains('active');
         setClass(acc, 'active', 'remove');
         setClass(panel, 'show', 'remove');
         if (setClasses) {
            this.classList.toggle('active');
            this.nextElementSibling.classList.toggle('show');
         }
      };
   }
   function setClass(els, className, fnName) {
      for (var i = 0; i < els.length; i++) {
         els[i].classList[fnName](className);
      }
   }
});
