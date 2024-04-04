// load DOM and get elements by id
document.addEventListener('DOMContentLoaded', function() {
    const dogImageContainer = document.getElementById('dog-image-container');
    const breedDropdown = document.getElementById('breed-dropdown');
    const dogBreedsList = document.getElementById('dog-breeds');

    // Task 1: Fetch dog images and display them
    function fetchDogImages() {
        fetch('https://dog.ceo/api/breeds/image/random/3')
            .then(response => response.json())
            .then(data => {
                data.message.forEach(imageUrl => {
                    const img = document.createElement('img');
                    img.src = imageUrl;
                    dogImageContainer.appendChild(img);
                });
            })
            .catch(error => console.error('Error fetching dog images:', error));
    }

    // Task 2: Fetch dog breeds and display them
    function fetchDogBreeds() {
        fetch('https://dog.ceo/api/breeds/list/all')
            .then(response => response.json())
            .then(data => {
                const breeds = Object.keys(data.message);
                breeds.forEach(breed => {
                    const li = document.createElement('li');
                    li.textContent = breed;
                    dogBreedsList.appendChild(li);
                });
            })
            .catch(error => console.error('Error fetching dog breeds:', error));
    }

    // Task 3: Filter dog breeds based on the selected starting letter
    breedDropdown.addEventListener('change', function() {
        const selectedLetter = breedDropdown.value;
        const allBreeds = dogBreedsList.querySelectorAll('li');
        allBreeds.forEach(breed => {
            const breedName = breed.textContent.toLowerCase();
            if (breedName.startsWith(selectedLetter)) {
                breed.style.display = 'block';
            } else {
                breed.style.display = 'none';
            }
        });
    });

    fetchDogImages();
    fetchDogBreeds();
});
