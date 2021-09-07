const openBtn = document.getElementById('submit-btn');
const closeBtn = document.getElementById('minicart__close');
const minicart = document.getElementsByClassName('minicart')[0];
const itemBox = document.getElementsByClassName('minicart__items')[0];

/*  Functions  */
const showMinicart = () => {
  minicart.classList.add('minicart--show');
}

const hideMiniCart = () => {
  if (minicart.className.includes('minicart--show')) {
    minicart.classList.remove('minicart--show');
  }
}

const getDataCart = async() => {

  let data = {
    info: 'empty'
  };

  try {
    const base_url = '/cart.js';
    const response = await fetch(base_url);
    data = await response.json();
    
  } catch (e) {
    console.log(e);
    data = {
      info: 'There was an error with the request'
    }
  }
  return data;
}

const renderData = (data) => {
  console.log(data);

  const items = data.items;

  if (items.length !== 0) {
    items.forEach((element) => {
  
      const div = document.createElement("div");
      const title = `<h6>${ element.title.toUpperCase() }</h6>`;
      const img = `<img src="${ element.image }" alt="${ element.title }" width="100" height="100" loading="lazy" class="minicart__image">`;
      const addIcon = `<i class="fas fa-plus fa-2x"></i>`;
      const minusIcon = `<i class="fas fa-minus fa-2x"></i>`;
      const quantity = `<span>${ element.quantity }</span>`;
  
      itemBox.appendChild(div).innerHTML = `${ title } ${ img } ${quantity}`;
    });
  } else {
      const text = 'You have not added products to the cart';
      const alert = `<span>${ text }</span>`;

      itemBox.appendChild(alert);
  }

}

const removeChilds = () => {
  while (itemBox.firstChild) {
    itemBox.removeChild(itemBox.firstChild);
  }
}

/*:::::::::::::::::::::::::::::::
   Main stack when open pop up  
:::::::::::::::::::::::::::::::::*/ 
const handleOpenClick = () => {
  
  let cartData;
  showMinicart();

  (async () => {
    cartData = await getDataCart();
    renderData(cartData);
  })()
}

/*:::::::::::::::::::::::::::::::
        When close pop up
:::::::::::::::::::::::::::::::::*/
const handleCloseClick = () => {
  hideMiniCart();
  removeChilds();
}

openBtn.addEventListener('click', handleOpenClick);
closeBtn.addEventListener('click', handleCloseClick);

