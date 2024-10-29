// Adiciona funcionalidade de redirecionamento ao clicar no logo//
document.querySelector('.logo').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'index.html';  // Redireciona para a página inicial
});

// Funcionalidade de pesquisa
document.querySelector('#search-button').addEventListener('click', function() {
    const query = document.querySelector('#search-bar').value;
    if (query) {
        alert('Você pesquisou por: ' + query);
        // Aqui você pode adicionar a lógica de pesquisa para redirecionar ou buscar produtos
    } else {
        alert('Digite algo para buscar.');
    }
});

//carrosel//
let currentIndex = 0;
const itemsToShow = 4; // Número de itens a serem exibidos
const totalItems = document.querySelectorAll('.carousel-item').length;

function showSlides() {
    const carouselInner = document.querySelector('.carousel-inner');
    const offset = (currentIndex * 100) / itemsToShow; // Calcular o deslocamento
    carouselInner.style.transform = `translateX(-${offset}%)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % Math.ceil(totalItems / itemsToShow);
    showSlides();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + Math.ceil(totalItems / itemsToShow)) % Math.ceil(totalItems / itemsToShow);
    showSlides();
}

//carrosel 2//
document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".product-slide");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");
    const indicators = document.querySelectorAll(".carousel-indicators .indicator");
  
    let currentSlide = 0;
  
    function updateCarousel() {
      // Oculta todos os slides
      slides.forEach((slide, index) => {
        slide.style.display = index === currentSlide ? "flex" : "none";
      });
  
      // Atualiza os indicadores ativos
      indicators.forEach((indicator, index) => {
        indicator.classList.toggle("active", index === currentSlide);
      });
    }
  
    function goToSlide(slideIndex) {
      if (slideIndex >= 0 && slideIndex < slides.length) {
        currentSlide = slideIndex;
        updateCarousel();
      }
    }
  
    nextButton.addEventListener("click", () => {
      goToSlide((currentSlide + 1) % slides.length);
    });
  
    prevButton.addEventListener("click", () => {
      goToSlide((currentSlide - 1 + slides.length) % slides.length);
    });
  
    indicators.forEach((indicator, index) => {
      indicator.addEventListener("click", () => goToSlide(index));
    });
  
    // Mostra o slide inicial
    updateCarousel();
  });


// banner 3 //
document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll(".card");
    let index = 0;

    function rotateCards() {
        cards.forEach((card, i) => {
            card.style.transform = `translateX(${(i - index) * 170}px)`;
        });
        index = (index + 1) % cards.length;
    }

    setInterval(rotateCards, 3000); // Rotaciona os cards a cada 3 segundos
});



// Carrossel de Avaliações
const totalReviews = 3; // Total de avaliações
const carouselContent = document.querySelector('.carousel-content');

function changeReview(direction) {
  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = totalReviews - 1;
  } else if (currentIndex >= totalReviews) {
    currentIndex = 0;
  }

  carouselContent.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Carrossel de Imagens da Seção História
const totalImages = 6; // Total de imagens no carrossel de história
const carouselImages = document.querySelector('.carousel-images');

function changeImage(direction) {
  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = totalImages - 1;
  } else if (currentIndex >= totalImages) {
    currentIndex = 0;
  }

  carouselImages.style.transform = `translateX(-${currentIndex * 100}%)`;
}


