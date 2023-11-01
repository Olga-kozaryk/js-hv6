const listEl = document.querySelectorAll('.item');
console.log("Number of categories:", listEl.length);
listEl.forEach((el) => {
  const category = el.firstElementChild.textContent;
  const elements = el.lastElementChild.children.length;
console.log(`Category: ${category} 
Elements: ${elements}`)});