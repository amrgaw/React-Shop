export default function ProductsApi() {}

function GetAllProducts() {
  let url = "https://fakestoreapi.com/products";
  return FetchData(url);
}
function GetSingleProducts(parmas) {
  let url = `https://fakestoreapi.com/products/id:${parmas}`;
  return FetchData(url);
}
function FetchData(url) {
  let data = {};
  fetch(url)
    .then((res) => res.json())
    .then((json) => ( console.log(json)));
  return data;
}

export { GetAllProducts, GetSingleProducts };
