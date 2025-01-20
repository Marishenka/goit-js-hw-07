const categoriesList = document.querySelector("#categories");
const categories = categoriesList.children;

console.log(`Number of categories: ${categories.length}`);

[...categories].forEach((category) => {
  const title = category.querySelector("h2").textContent;
  const itemCount = category.querySelectorAll("li").length;
  console.log(`Category: ${title}`);
  console.log(`Elements: ${itemCount}`);
});
