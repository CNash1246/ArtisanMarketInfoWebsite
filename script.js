'use strict';

function toggleDescription(vendorId) {
    let description = document.getElementById(vendorId + '-description');
    let toggleButton = document.getElementById(vendorId + '-toggle');

    if (description.classList.contains('expanded')) {
        description.classList.remove('expanded');
        toggleButton.innerText = 'Read more';
    } else {
        description.classList.add('expanded');
        toggleButton.innerText = 'Read less';
    }
}

let currentImageIndex = 0;
    let images = [
        'images/flower.avif',
        'images/Market.png',
        'images/tables.png'
    ];

    function showNextImage() {
        let slideshowImage = document.getElementById('slideshow-image');
        currentImageIndex = (currentImageIndex + 1) % images.length;
        slideshowImage.src = images[currentImageIndex];
    }

    function showPreviousImage() {
        let slideshowImage = document.getElementById('slideshow-image');
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        slideshowImage.src = images[currentImageIndex];
    }


    function validateForm() {
        let nameInput = document.getElementById('name');
        let emailInput = document.getElementById('email');

        if (nameInput.value.trim() === '') {
            alert('Please enter your name.');
            return false;
        }

        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value.trim())) {
            alert('Please enter a valid email address.');
            return false;
        }
        return true;
    }

    document.addEventListener("DOMContentLoaded", function() {
        const quote = document.getElementById("quote");
        const author = document.getElementById("author");
        const base_url = "https://api.quotable.io/random";
    
        async function getquote(url) {
            const response = await fetch(url);
            var data = await response.json();
            console.log(data);
            quote.innerHTML = data.content;
            author.innerHTML = data.author;
        }
    
        getquote(base_url);
    });

    