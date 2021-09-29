export const getProductsFromCart = async() => {

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