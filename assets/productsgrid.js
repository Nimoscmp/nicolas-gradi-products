const select_number = document.getElementById('product_number_gradi');
  const select_tags = document.getElementById('product_tag_gradi');
  const cards = document.getElementsByClassName('product_card_gradi');
  const cardsLength = cards.length;

    /*select_number.addEventListener('change', event => {

        for (let i = 0; i < cardsLength; i++) {
            if(parseInt(event.target.value) <= i){
                cards[i].style.display = 'none';
            } else {
                cards[i].style.display = 'block';
            }
        }
    })*/

  select_tags.addEventListener('change', function(event) {

    let block = 0, none = 0;
    let productsToShow = [];

    for (let i = 0; i < cardsLength; i++) {
      const tagChildNodes = cards[i].childNodes[7].childNodes;
      const tagsLength = tagChildNodes.length;
      let tag_exists = false;
      
      for (let j = 0; j < tagsLength; j++) {
        if(tagChildNodes[j].nodeName === '#text'){
          continue;
        } 
        
        if(event.target.value === tagChildNodes[j].innerText){
          tag_exists = true;
        } 
      }
      if(event.target.value === 'all'){
        tag_exists = true;
      }
      if(tag_exists){
        productsToShow.push(cards[i]);
      }

      // if(tag_exists && (i < select_number.value)){
      //   block++;
      // } else {
      //   none++;
      // }
      

      if(tag_exists && (select_number.value)){
        console.log("NB:" + block);
        cards[i].style.display = 'block';
      } else {
        console.log("NN:" + none);
        cards[i].style.display = 'none';
      }
    }

    // const productsLength = productsToShow.length;

    // for (let i = 0; i < productsLength; i++) {
    //   if(tag_exists && (block <= select_number.value)){
    //     console.log("NB:" + block);
    //     cards[i].style.display = 'block';
    //   } else {
    //     console.log("NN:" + none);
    //     cards[i].style.display = 'none';
    //   }
    // }


    console.log("block:: " + block + "___" + "none:: " + none);
  })