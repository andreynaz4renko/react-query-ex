export const fetchRoverPhotos = async () => {
  return fetch(
    `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=x4wYaBeEkkIrohFdHYESaqVUamI4aVponiOwWiVG`
  ).then((response) => response.json());
};
