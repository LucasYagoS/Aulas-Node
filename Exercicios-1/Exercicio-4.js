const catalog = [];
let productId = 0;

const postProduct = (data) => {
  catalog.push(data);
};

const makeProduct = (nome, preço, categoria) => {
  const product = {
    Nome: nome,
    Preço: preço,
    Categoria: categoria,
    Id: productId++,
  };

  return postProduct(product);
};
const findProductById = (id) => {
  const item = catalog.find((product) => product.Id === id);
  if (!item) {
    return "Product not found";
  }
  return item;
};
const updateProduct = (nome, preço, categoria, id) => {
  const productFound = findProductById(id);
  if (!productFound) {
    return "Product not found";
  }
  Object.assign(productFound, {
    Nome: nome,
    Preço: preço,
    Categoria: categoria,
  });
  return catalog;
};



const filterByCategory = (category) => {
    const listFiltered = catalog.filter((item) => item.Categoria === category);
    return listFiltered
}

makeProduct("bala", 2, "doce")
makeProduct("caramelo", 2, "doce")
makeProduct("bala", 2, "doce")
makeProduct("cenoura", 5 , "legume")
makeProduct("cenoura", 5 , "legume")
makeProduct("cenoura", 5 , "legume")

const filterByPrice = (priceMin, priceMax) => {
    const priceFiltered = catalog.filter((item) => item.Preço >= priceMin && item.Preço <= priceMax);
    return priceFiltered
}

// console.log(filterByPrice(4, 6));

const deleteProduct = (id) => {
    const index = catalog.findIndex((item) => item.Id === id);
    catalog.splice(index, 1);
} 
// deleteProduct(1)
// console.log(catalog)

console.log(updateProduct("jujuba" , 10, "guluseima", 1))