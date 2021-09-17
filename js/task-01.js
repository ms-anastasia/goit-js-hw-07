const liItem = document.querySelectorAll("li.item")
console.log(`В списке ${liItem.length} категории.`)

const ulAll = document.querySelectorAll('#categories>li.item');
ul.forEach(el => {

  console.log(
    `Категория: ${el.firstElementChild.textContent}, Количество элементов: ${el.lastElementChild.children.length}`,
  );
});