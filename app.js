const items = document.querySelectorAll('.accordion-block');
const accordionImages = document.querySelectorAll('.accordion-image');

items.forEach((item, index) => {
   let opener = item.querySelector('.accordion-opener');
   let accordionContent = item.querySelector('.accordion-content');
   let accordionContentWrap = item.querySelector('.accordion-content-wrap');
   let accordionContentWrapHeight = accordionContentWrap.scrollHeight;

   // if (item.hasAttribute('id', 'first')) {
   //    item.classList.add('active');
   //    accordionContent.style.height = `${accordionContentWrapHeight}px`;
   //    let attrValue = item.getAttribute('data-item');
   //    console.log(attrValue);
   //    let attrValueElem = document.getElementById(attrValue);
   //    attrValueElem.classList.add('active');
   // }

   opener.addEventListener('click', () => {
      item.classList.toggle('active');
      let eleValue = item.getAttribute('data-item');
      let itemId = document.getElementById(eleValue);

      accordionImages.forEach((image) => {
         image.classList.remove('active');
      });

      itemId.classList.add('active');
      if (item.classList.contains('active')) {
         accordionContent.style.height = `${accordionContentWrapHeight}px`;
      } else {
         item.classList.remove('active');
         accordionContent.style.height = '0px';
      }
      removeActive(index);
   });
});

function removeActive(index1) {
   items.forEach((item2, index2) => {
      if (index1 !== index2) {
         item2.classList.remove('active');
         let accordionContent = item2.querySelector('.accordion-content');
         accordionContent.style.height = '0px';
      }
   });
}

function hoverAccordion() {
   const hoverAccordions = document.querySelectorAll('.hover-accordion');
   hoverAccordions.forEach((item, index) => {
      let opener = item.querySelector('.hover-accordion-opener');
      let hoverAccordionContent = item.querySelector(
         '.hover-accordion-content'
      );
      let hoverAccordionContentWrap = item.querySelector(
         '.hover-accordion-content-wrap'
      );
      let hoverAccordionContentWrapHeight =
         hoverAccordionContentWrap.scrollHeight;
      let section = item.closest('.image-tires');
      let hoverAccordionImages = section.querySelectorAll(
         '.hover-accordion-image'
      );

      if (item.hasAttribute('id', 'first')) {
         let attrValue = item.getAttribute('data-image');
         let section = item.closest('.image-tires');
         let attrValueElem = section.querySelector(`#${attrValue}`);
         attrValueElem.classList.add('active');
      }
      // for new
      if (index === 0) {
         let attrValue = item.getAttribute('data-image');
         let section = item.closest('.image-tires');
         let attrValueElem = section.querySelector(`#${attrValue}`);
         attrValueElem.classList.add('active');
      }

      opener.addEventListener('mouseenter', (e) => {
         e.preventDefault();
         item.classList.toggle('active');
         let eleValue = item.getAttribute('data-image');
         let imageId = section.querySelector(`#${eleValue}`);

         hoverAccordionImages.forEach((image) => {
            image.classList.remove('active');
         });

         imageId.classList.add('active');
         if (item.classList.contains('active')) {
            hoverAccordionContent.style.height = `${hoverAccordionContentWrapHeight}px`;
         } else {
            item.classList.remove('active');
            hoverAccordionContent.style.height = '0px';
         }
         removeActive(index);
      });
   });

   function removeActive(index1) {
      hoverAccordions.forEach((item2, index2) => {
         if (index1 !== index2) {
            item2.classList.remove('active');
            let hoverAccordionContent = item2.querySelector(
               '.hover-accordion-content'
            );
            hoverAccordionContent.style.height = '0px';
         }
      });
   }
}
