let searchBox = document.querySelector('#search-box');
let images = document.querySelectorAll('.container .image-container .image');

searchBox.oninput = () => {
  let value = searchBox.value.toLowerCase(); // Converter para minúsculas

  // Filtrar as imagens que correspondem ao valor digitado
  let filteredImages = Array.from(images).filter(filter => {
    let title = filter.getAttribute('data-title').toLowerCase(); // Converter para minúsculas
    return title.includes(value);
  });

  images.forEach(image => {
    // Verificar se a imagem está presente na lista filtrada
    if (filteredImages.includes(image)) {
      image.style.display = 'block';
    } else {
      image.style.display = 'none';
    }
  });
};