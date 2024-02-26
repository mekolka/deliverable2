document.getElementById('button').addEventListener('click', function() {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => {
      const imageContainer = document.getElementById('image_container');
      imageContainer.innerHTML = '';
      const img = document.createElement('img');
      img.src = data.message; 
      img.alt = 'A random dog';
      imageContainer.appendChild(img);
    })
    .catch(error => {
      console.error('Error:', error);
    });
});