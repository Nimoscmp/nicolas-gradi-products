const productImg = document.getElementsByClassName('product__card-img');
const inputs = document.getElementsByClassName('product-form__input-input');

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

window.addEventListener('load', () => {
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