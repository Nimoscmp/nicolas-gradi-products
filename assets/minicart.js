const btn = document.getElementById('submit-btn');
const minicart = document.getElementsByClassName('minicart')[0];

const showMinicart = () => {
  minicart.classList.add('minicart--show');
}

const hideMiniCart = () => {
  if (minicart.className.includes('minicart--show')) {
    minicart.classList.remove('minicart--show');
  }
}

const getCart = async() => {
  
}

const handleOpenClick = () => {
  showMinicart();
  getCart();
}

const handleCloseClick = () => {
  hideMiniCart();
}

btn.addEventListener('click', handleOpenClick);
minicart.addEventListener('click', handleCloseClick);

