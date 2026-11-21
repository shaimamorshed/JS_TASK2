
const categoriesURL = "https://dummyjson.com/products/categories";
const productsURL = "https://dummyjson.com/products";

async function getCategories() {
  const response = await fetch(categoriesURL);
  const categories = await response.json();
  console.log(categories);
  displayCategories(categories);
}
async function getProducts() {
  const response = await fetch(productsURL);
  const data = await response.json();
  console.log(data);

  displayProducts(data.products);
}
function displayCategories(categories) {
  const container = document.getElementById("categories");


  for (let i = 0; i < categories.length; i++) {
    container.innerHTML+= `
      <div class="bg-white rounded-xl p-5 text-center font-medium text-slate-800
                  border border-slate-200 shadow-sm cursor-pointer
                  hover:bg-teal-600 hover:text-white transition">
        ${categories[i].name}
      </div>
    `;
  }
}
function displayProducts(products) {
  const container = document.getElementById("products");


  for (let i = 0; i < products.length; i++) {
    container.innerHTML+= `
      <div class="bg-white rounded-xl shadow p-4">
        <img src="${products[i].thumbnail}" alt="${products[i].title}"
             class="w-full h-48 object-contain">
        <h3 class="font-bold mt-3">${products[i].title}</h3>
        <p class="text-gray-500 text-sm">${products[i].category}</p>
        <p class="text-teal-700 font-bold mt-2">$${products[i].price}</p>
      </div>
    `;
  }
}
getCategories();
getProducts();