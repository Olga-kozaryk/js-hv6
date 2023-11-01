const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
  ];
  const listIngredients = document.querySelector('#ingredients');
console.log(listIngredients);


  const Itemingredients = ingredients =>{

 return ingredients.map( ingredient => {
   const itemEl = document.createElement('li');
  itemEl.textContent = ingredient;
  itemEl.classList.add('item');
  return itemEl;
 });
}

 const el = Itemingredients(ingredients);

  listIngredients.append(...el);