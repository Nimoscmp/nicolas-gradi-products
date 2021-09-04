const pinkRadio = document.querySelectorAll('.gradidiv__product__radio--pink');
const purpleRadio = document.querySelectorAll('.gradidiv__product__radio--purple');
const orangeRadio = document.querySelectorAll('.gradidiv__product__radio--orange');
const pinkImg = document.getElementsByClassName('gradidiv__product__img--pink');
const purpleImg = document.getElementsByClassName('gradidiv__product__img--purple');
const orangeImg = document.getElementsByClassName('gradidiv__product__img--orange');

const pinkLength = pinkRadio.length;
const purpleLength = purpleRadio.length;
const orangeLength = orangeRadio.length;

for (let i = 0; i < pinkLength; i++) {

  const handleMouseLeave = () => {
    pinkImg[i].style.display = 'block';
    purpleImg[i].style.display = 'none';
    orangeImg[i].style.display = 'none';
    pinkRadio[i].style.borderColor = 'black';
    purpleRadio[i].style.borderColor = 'lightgray';
    orangeRadio[i].style.borderColor = 'lightgray';
  }

  pinkRadio[i].addEventListener('mouseenter', () => {
    
    pinkImg[i].style.display = 'block';
    purpleImg[i].style.display = 'none';
    orangeImg[i].style.display = 'none';
    pinkRadio[i].style.borderColor = 'black';

  })

  pinkRadio[i].addEventListener('mouseleave', handleMouseLeave)
  
  purpleRadio[i].addEventListener('mouseenter', () => {
    
    pinkImg[i].style.display = 'none';
    purpleImg[i].style.display = 'block';
    orangeImg[i].style.display = 'none';
    purpleRadio[i].style.borderColor = 'black';
    pinkRadio[i].style.borderColor = 'lightgray';

  })

  purpleRadio[i].addEventListener('mouseleave', handleMouseLeave)
  
  orangeRadio[i].addEventListener('mouseenter', () => {
    
    pinkImg[i].style.display = 'none';
    purpleImg[i].style.display = 'none';
    orangeImg[i].style.display = 'block';
    orangeRadio[i].style.borderColor = 'black';
    pinkRadio[i].style.borderColor = 'lightgray';

  })

  orangeRadio[i].addEventListener('mouseleave', handleMouseLeave)
}