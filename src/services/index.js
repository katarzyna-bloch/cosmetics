export const fetchHomeSpaProducts = () => {
  return fetch('http://localhost:3004/homeSpaProducts')
    .then(response => response.json());
}
