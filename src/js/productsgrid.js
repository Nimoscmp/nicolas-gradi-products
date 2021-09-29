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
    /*  For pink variant */
    if (pinkImg[i].className.includes('gradidiv__product__img--dnone')) {
      pinkImg[i].classList.remove('gradidiv__product__img--dnone');
    }

    /*  For purple variant */
    if (!purpleImg[i].className.includes('gradidiv__product__img--dnone')) {
      purpleImg[i].classList.add('gradidiv__product__img--dnone');
    }

    if (purpleImg[i].className.includes('gradidiv__product__img--dinline')) {
      purpleImg[i].classList.remove('gradidiv__product__img--dinline');
    }

    /*  For orange variant */
    if (!orangeImg[i].className.includes('gradidiv__product__img--dnone')) {
      orangeImg[i].classList.add('gradidiv__product__img--dnone');
    }

    if (orangeImg[i].className.includes('gradidiv__product__img--dinline')) {
      orangeImg[i].classList.remove('gradidiv__product__img--dinline');
    }

    /*  Radio border */

    if (pinkImg[i].className.includes('gradidiv__product__border-radio--gray')) {
      pinkRadio[i].classList.remove('gradidiv__product__border-radio--gray');
    }
    
    if (!pinkImg[i].className.includes('gradidiv__product__border-radio--black')) {
      pinkRadio[i].classList.add('gradidiv__product__border-radio--black');      
    }

    if (purpleImg[i].className.includes('gradidiv__product__border-radio--black')) {
      purpleRadio[i].classList.remove('gradidiv__product__border-radio--black');
    }

    if (!purpleImg[i].className.includes('gradidiv__product__border-radio--gray')) {
      purpleRadio[i].classList.add('gradidiv__product__border-radio--gray');
    }
  
    if (orangeImg[i].className.includes('gradidiv__product__border-radio--black')) {
      orangeRadio[i].classList.remove('gradidiv__product__border-radio--black');
    }
    
    if (!orangeImg[i].className.includes('gradidiv__product__border-radio--gray')) {
      orangeRadio[i].classList.add('gradidiv__product__border-radio--gray');
    }
  }

  pinkRadio[i].addEventListener('mouseenter', () => {
    
    if (pinkImg[i].className.includes('gradidiv__product__img--dnone')) {
      pinkImg[i].classList.remove('gradidiv__product__img--dnone');
    }

    pinkImg[i].classList.add('gradidiv__product__img--dinline');

    if (purpleImg[i].className.includes('gradidiv__product__img--dinline')) {
      purpleImg[i].classList.remove('gradidiv__product__img--dinline');
    }

    purpleImg[i].classList.add('gradidiv__product__img--dnone');

    if (orangeImg[i].className.includes('gradidiv__product__img--dinline')) {
      orangeImg[i].classList.remove('gradidiv__product__img--dinline');
    }

    orangeImg[i].classList.add('gradidiv__product__img--dnone');

    /*  Radio border */
    /*pinkRadio[i].classList.add('gradidiv__product__border-radio--black');
    purpleRadio[i].classList.remove('gradidiv__product__border-radio--black');
    orangeRadio[i].classList.remove('gradidiv__product__border-radio--black');*/
  })

  pinkRadio[i].addEventListener('mouseleave', handleMouseLeave);
  
  purpleRadio[i].addEventListener('mouseenter', () => {
    
    if (purpleImg[i].className.includes('gradidiv__product__img--dnone')) {
      purpleImg[i].classList.remove('gradidiv__product__img--dnone');
    }

    purpleImg[i].classList.add('gradidiv__product__img--dinline');

    if (pinkImg[i].className.includes('gradidiv__product__img--dinline')) {
      pinkImg[i].classList.remove('gradidiv__product__img--dinline');
    }

    pinkImg[i].classList.add('gradidiv__product__img--dnone');

    if (orangeImg[i].className.includes('gradidiv__product__img--dinline')) {
      orangeImg[i].classList.remove('gradidiv__product__img--dinline');
    }

    orangeImg[i].classList.add('gradidiv__product__img--dnone');
  })

  purpleRadio[i].addEventListener('mouseleave', handleMouseLeave);
  
  orangeRadio[i].addEventListener('mouseenter', () => {
    
    if (orangeImg[i].className.includes('gradidiv__product__img--dnone')) {
      orangeImg[i].classList.remove('gradidiv__product__img--dnone');
    }

    orangeImg[i].classList.add('gradidiv__product__img--dinline');

    if (pinkImg[i].className.includes('gradidiv__product__img--dinline')) {
      pinkImg[i].classList.remove('gradidiv__product__img--dinline');
    }

    pinkImg[i].classList.add('gradidiv__product__img--dnone');

    if (purpleImg[i].className.includes('gradidiv__product__img--dinline')) {
      purpleImg[i].classList.remove('gradidiv__product__img--dinline');
    }

    purpleImg[i].classList.add('gradidiv__product__img--dnone');
  })

  orangeRadio[i].addEventListener('mouseleave', handleMouseLeave);
}