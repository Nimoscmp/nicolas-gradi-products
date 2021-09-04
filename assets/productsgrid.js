let pinkRadio = document.querySelectorAll('.gradidiv__product__radio--pink');
let purpleRadio = document.querySelectorAll('.gradidiv__product__radio--purple');
let orangeRadio = document.querySelectorAll('.gradidiv__product__radio--orange');
let pinkImg = document.getElementsByClassName('gradidiv__product__img--pink');
let purpleImg = document.getElementsByClassName('gradidiv__product__img--purple');
let orangeImg = document.getElementsByClassName('gradidiv__product__img--orange');

let pinkLength = pinkRadio.length;
let purpleLength = purpleRadio.length;
let orangeLength = orangeRadio.length;

for (let i = 0; i < pinkLength; i++) {

  const handleMouseLeave = () => {
    pinkImg[i].style.display = 'inline';
    purpleImg[i].style.display = 'none';
    orangeImg[i].style.display = 'none';
    pinkRadio[i].style.borderColor = 'black';
    purpleRadio[i].style.borderColor = 'lightgray';
    orangeRadio[i].style.borderColor = 'lightgray';
  }

  pinkRadio[i].addEventListener('mouseenter', () => {
    
    pinkImg[i].style.display = 'inline';
    purpleImg[i].style.display = 'none';
    orangeImg[i].style.display = 'none';
    pinkRadio[i].style.borderColor = 'black';

  })

  pinkRadio[i].addEventListener('mouseleave', handleMouseLeave)
  
  purpleRadio[i].addEventListener('mouseenter', () => {
    
    pinkImg[i].style.display = 'none';
    purpleImg[i].style.display = 'inline';
    orangeImg[i].style.display = 'none';
    purpleRadio[i].style.borderColor = 'black';
    pinkRadio[i].style.borderColor = 'lightgray';

  })

  purpleRadio[i].addEventListener('mouseleave', handleMouseLeave)
  
  orangeRadio[i].addEventListener('mouseenter', () => {
    
    pinkImg[i].style.display = 'none';
    purpleImg[i].style.display = 'none';
    orangeImg[i].style.display = 'inline';
    orangeRadio[i].style.borderColor = 'black';
    pinkRadio[i].style.borderColor = 'lightgray';

  })

  orangeRadio[i].addEventListener('mouseleave', handleMouseLeave)
}