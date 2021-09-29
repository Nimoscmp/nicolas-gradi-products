const openBtn = document.getElementById('submit-btn');
const closeBtn = document.getElementById('minicart__close');
const minicart = document.getElementsByClassName('minicart')[0];
const itemBox = document.getElementsByClassName('minicart__items')[0];

/* :::::::::::::::::::::
::::     HELPERS    ::::
:::::::::::::::::::::::: */

const showMinicart = () => {
  minicart.classList.add('minicart--show');
}

const hideMiniCart = () => {
  if (minicart.className.includes('minicart--show')) {
    minicart.classList.remove('minicart--show');
  }
}

const removeChilds = () => {
  while (itemBox.firstChild) {
    itemBox.removeChild(itemBox.firstChild);
  }
}

const getProductHandle = () => {
  const handle = sessionStorage.getItem('current_product_handle');
  return handle;
}

/* :::::::::::::::::::::
::::     SESSION    ::::
:::::::::::::::::::::::: */

const createSessionCart = (cartData, isNew) => {
  
  let sessionCart;

  if (isNew) {
    sessionCart = {
      itemCount: 0,
      items: []
    };
  } else {
    sessionCart = JSON.parse(sessionStorage.getItem('current_session_cart'));
  }

  sessionCart.itemCount = cartData.item_count;

  sessionStorage.setItem('current_session_cart', JSON.stringify(sessionCart));

  return sessionCart;
}

const addItemSessionCart = item => {
  let sessionCart = JSON.parse(sessionStorage.getItem('current_session_cart'));

  if (sessionCart.items) {
    sessionCart.items.push(item);
  }

  sessionCart.itemCount += 1; 

  sessionStorage.setItem('current_session_cart', JSON.stringify(sessionCart));

  return sessionCart;
}

const updateItemSessionCart = item => {
  let sessionCart = JSON.parse(sessionStorage.getItem('current_session_cart'));
  let itemOrder;

  const itemsLength = sessionCart.items.length;

  for (let i = 0; i < itemsLength; i++) {
    if (item.id === sessionCart.items[i].id) {
      sessionCart.items[i] = item;
    }
  }

  sessionCart.itemCount += 1; 

  sessionStorage.setItem('current_session_cart', JSON.stringify(sessionCart));
  
  return sessionCart;
}

/* :::::::::::::::::::::
::::     SERVICES   ::::
:::::::::::::::::::::::: */

const getProductId = async(handle) => {
  let id, data;
  const baseUrl = `/products/${ handle }.js`;
  
  try {
    const response = await fetch(baseUrl);
    data = await response.json();
    id = data.variants[0].id;

  } catch (e) {
    console.log(e);
  }

  return id;
}

const getProductsFromCart = async() => {

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

const addProductToCart = async(id) => {

  let data = {}, itemAdded = {};

  let formData = {
    'items': [{     
      'id': id,     
      'quantity': 1    
    }]     
  };

  try {
    const baseUrl = '/cart/add.js';
    const response = await fetch(baseUrl, {
      method: 'POST',      
      headers: {      
        'Content-Type': 'application/json'      
      },      
      body: JSON.stringify(formData)      
    });

    data = await response.json();

    itemAdded.id = data.items[0].id;
    itemAdded.title = data.items[0].title;
    itemAdded.image = data.items[0].image;
    itemAdded.quantity = data.items[0].quantity;

  } catch (e) {
    console.log(e);
    data = {
      info: 'There was an error with the request'
    }
  } 

  return itemAdded;
}

const updateProduct = async(id, quantity) => {
  let data = {},  itemUpdated = {};

  let formData = {
    'updates': {}
  };

  formData.updates[id] = quantity;

  try {
    const baseUrl = '/cart/update.js';
    const response = await fetch(baseUrl, {
      method: 'POST',      
      headers: {      
        'Content-Type': 'application/json'      
      },      
      body: JSON.stringify(formData)      
    });

    data = await response.json();

    data.items.forEach(element => {
      if (id === element.id) {
        itemUpdated.id = element.id;
        itemUpdated.title = element.title;
        itemUpdated.image = element.image;
        itemUpdated.quantity = element.quantity;
      }
    });

  } catch (e) {
    console.log(e);
    data = {
      info: 'There was an error with the request'
    }
  }

  return itemUpdated;
}

const renderData = data => {

  const items = data.items;
  
  if (items.length !== 0) {
    items.forEach((element) => {
      
      const div = document.createElement("div");
      const title = `<h6>${ element.title.toUpperCase() }</h6>`;
      const img = `<img src="${ element.image }" alt="${ element.title }" width="100" height="100" loading="lazy" class="minicart__image">`;
      const addIcon = `<i class="fas fa-plus fa-2x"></i>`;
      const minusIcon = `<i class="fas fa-minus fa-2x"></i>`;
      const quantity = `<span>${ element.quantity }</span>`;
  
      itemBox.appendChild(div).innerHTML = `${ title } ${ img } ${ addIcon } ${ minusIcon } ${quantity}`;
    });
  } else {
      const text = 'You have not added products to the cart';
      const alert = `<span>${ text }</span>`;

      itemBox.appendChild(div).innerHTML = `${ alert }`;
  }
}

/*:::::::::::::::::::::::::::::::
  Main stack when open pop up  
:::::::::::::::::::::::::::::::::*/ 
const handleOpenClick = () => {
  
  let cartData, productHandle, productId, sessionCart, isNewSessionCart = true;
  
  productHandle = getProductHandle();
  
  (async () => {
    productId = await getProductId(productHandle);
    cartData = await getProductsFromCart();

    if (sessionStorage.current_session_cart) {
      isNewSessionCart = false;
    }

    sessionCart = createSessionCart(cartData, isNewSessionCart);

    if (sessionCart.itemCount > 0) {
      const itemsLength = sessionCart.items.length;

      for (let i = 0; i < itemsLength; i++) {
        if (sessionCart.items[i].id === productId) {
          const itemToUpdate = await updateProduct(sessionCart.items[i].id , sessionCart.items[i].quantity + 1);
          sessionCart = updateItemSessionCart(itemToUpdate);
        } else if((i + 1) === itemsLength){
          const itemToAdd = await addProductToCart(productId);
          sessionCart = addItemSessionCart(itemToAdd);
        }
      }           
    } else {
      const itemToAdd = await addProductToCart(productId);
      sessionCart = addItemSessionCart(itemToAdd);
    }

    // renderData(sessionCart);

    showMinicart();
  })()
}

/*:::::::::::::::::::::::::::::::
  When update with plus and minus
:::::::::::::::::::::::::::::::::*/

const handleAddClick = () => {

}

const handleMinusClick = () => {

}

const handleOnChangeClick = () => {
  
}

/*:::::::::::::::::::::::::::::::
            When remove
:::::::::::::::::::::::::::::::::*/

const handleRemoveClick = () => {

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

