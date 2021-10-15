const URL = 'http://localhost:3004'

export const fetchCategory = (url) => {
  return fetch(`${URL}/categories?url=${url}&_embed=products`)
    .then((response) => response.json())
    .then((response) => response[0]);
}

export const fetchProduct = (id) => {
  return fetch(`${URL}/products/${id}?_expand=category`)
    .then((response) => response.json());
}

export const fetchSearch = (search) => {
  return fetch(`${URL}/products${search}`)
    .then((response) => response.json());
}

export const fetchSale = () => {
  return fetch(`${URL}/products?hasDiscount=true`)
    .then((response) => response.json());
}

export const fetchCategories = () => {
  return fetch(`${URL}/categories`)
    .then((response) => response.json());
}
