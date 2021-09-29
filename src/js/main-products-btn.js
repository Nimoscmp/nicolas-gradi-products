const addToCartBtn = document.getElementsByClassName('product-form__submit-div');
const exceptionDiv = document.getElementById('product-form__exception');

for (let i = 0; i < cartBtn.length; i++) {
  
  addToCartBtn[0].addEventListener('click', (e) => {
    
    console.log('executed')
    
    if (text.includes('Sold')) {

      e.preventDefault();

      if (exceptionDiv.className.includes('product-form__exception--dnone')) {
        exceptionDiv.classList.remove('product-form__exception--dnone');
      }

    } else {

      if (!exceptionDiv.className.includes('product-form__exception--dnone')) {
        exceptionDiv.classList.add('product-form__exception--dnone');
      }
    }
  
  })
  
}