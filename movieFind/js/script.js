const apiKey = '18b96b1c';
const button = document.getElementById('search');
const results = document.querySelector('.results');
const resultsPerPage = 10;
let currentPage = 1;

function search(currentPage) {
  const searchInput = document.getElementById('search-bar').value;

  if (!searchInput.trim()) {
    alert('Digite um filme ou série');
    return;
  }

  results.innerHTML = '';

  fetch(
    `http://www.omdbapi.com/?s=${searchInput}&page=${currentPage}&apikey=18b96b1c`
  )
    .then(response => {
      if (!response) {
        throw new Error('Erro na resposta do servidor!');
      }

      return response.json();
    })
    .then(data => {
      if (!data.Search.length) {
        return;
      }
      document.querySelector('.results').classList.remove('disabled');

      data.Search.map(movie => {
        const newMovieCard = document.createElement('div');
        const movieImg = document.createElement('img');
        movieImg.setAttribute('src', movie.Poster);

        newMovieCard.classList.add('movie-card');
        newMovieCard.id = movie.imdbID;
        newMovieCard.appendChild(movieImg);
        newMovieCard.addEventListener('click', e => {
          const movieId = e.target.closest('.movie-card').getAttribute('id');
          showDetails(movieId);
        });

        results.appendChild(newMovieCard);
      });

      addPagination(data.totalResults);
    })
    .catch(error => {
      console.log(error);
    });
}

function addPagination(totalResults) {
  const pageController = document.querySelector('.pagination');
  pageController.innerHTML = '';

  let totalPages = Math.ceil(totalResults / resultsPerPage);

  if (totalPages > 20) {
    totalPages = 20;
  }

  for (let i = 1; i <= totalPages; i++) {
    const pageButton = document.createElement('button');
    pageButton.innerText = i;

    if (i == currentPage) {
      pageButton.className = 'page-button button-active';
    } else {
      pageButton.className = 'page-button';
    }

    pageButton.addEventListener('click', () => changePage(i));
    pageController.appendChild(pageButton);
  }
}

function changePage(newPage) {
  currentPage = newPage;

  search(currentPage);

  return;
}

function showDetails(imdbID) {
  if (!imdbID) {
    alert('Parâmetros inválidos. Nenhum ID de filme fornecido.');
    return;
  }

  const detalhesUrl = `details.html?imdbID=${imdbID}`;
  window.open(detalhesUrl, '_blank');
}
