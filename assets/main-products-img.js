const productImg = document.getElementsByClassName('product__card-img');
const inputs = document.getElementsByClassName('product-form__input-input');
const cartBtn = document.getElementsByClassName('product-form__submit');

const imgLength = productImg.length;
const inputsLength = inputs.length;

for (let i = 0; i < inputsLength; i++) {

  inputs[i].addEventListener('click', () => {
    
    for (let j = 0; j < imgLength; j++) {
      if (i === j) {
        productImg[j].style.display = 'inline';
      } else {
        productImg[j].style.display = 'none';
      }
    }
  })  
}


// cartBtn[0].addEventListener('click', () => {
  
//   let text = cartBtn[0].innerHTML;
  
//   if (text.includes('Sold')) {
//     console.log("Enter sold")
//     // cartBtn[0].classList.add('product-form__submit--disabled');
//     cartBtn[0].removeAttribute('disabled');
//   }
// })



window.addEventListener('load', () => {

  let text = cartBtn[0].innerHTML;

  if (text.includes('Sold') && !cartBtn[0].className.includes('product-form__submit--disabled')) {
    cartBtn[0].classList.add('product-form__submit--disabled');
    cartBtn[0].removeAttribute('disabled');
  }

  for (let i = 0; i < inputsLength; i++) {
    
    let attr = inputs[i].attributes;
    let attrLength = attr.length;

    for (let j = 0; j < imgLength; j++) {
      if (attrLength > 6) {
        productImg[i].style.display = 'inline';
      } else {
        productImg[i].style.display = 'none';
      }
    }
  }
})
