export const fetchHomeSpaProducts = () => {
  return fetch("http://localhost:3004/products?type=homeSpa")
    .then((response) => response.json());
}

export const fetchCleaningProducts = () => {
  return fetch("http://localhost:3004/products?type=cleaning")
    .then((response) => response.json());
}

export const fetchCareProducts = () => {
  return fetch("http://localhost:3004/products?type=care")
    .then((response) => response.json());
}

export const fetchProduct = (id) => {
  return fetch(`http://localhost:3004/products/${id}`)
    .then((response) => response.json());
}
