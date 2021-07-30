export const fetchCategory = (url) => {
  return fetch(`http://localhost:3004/categories?url=${url}&_embed=products`)
    .then((response) => response.json())
    .then((response) => response[0]);
}

export const fetchProduct = (id) => {
  return fetch(`http://localhost:3004/products/${id}?_expand=category`)
    .then((response) => response.json());
}

export const fetchSearch = (search) => {
  return fetch(`http://localhost:3004/products${search}`)
    .then((response) => response.json());
}

export const fetchSale = () => {
  return fetch('http://localhost:3004/products?hasDiscount=true')
    .then((response) => response.json());
}

export const fetchCategories = () => {
  return fetch('http://localhost:3004/categories')
    .then((response) => response.json());
}
