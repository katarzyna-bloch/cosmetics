export const fetchHomeSpaProducts = () => {
  return fetch('http://localhost:3004/homeSpaProducts')
    .then(response => response.json());
}

export const fetchCleaningProducts = () => {
  return fetch('http://localhost:3004/cleaningProducts')
    .then(response => response.json());
}

export const fetchCareProducts = () => {
  return fetch('http://localhost:3004/careProducts')
    .then(response => response.json());
}
