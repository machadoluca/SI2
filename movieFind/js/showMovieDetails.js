function showMovieDetails() {
  const imdbID = getParams();
  const movieImg = document.getElementById('movie-img');
  const movieTitle = document.querySelector('h2');
  const movieData = document.querySelectorAll('.movie-data');

  fetch(`http://www.omdbapi.com/?i=${imdbID}&plot=full&apikey=18b96b1c`)
    .then(response => response.json())
    .then(data => {
      const properties = [data.Year, data.imdbRating, data.Genre, data.Plot];
      movieTitle.innerHTML = data.Title;
      movieImg.setAttribute('src', data.Poster);
      movieData.forEach((element, i) => {
        element.innerHTML = properties[i];
      });
    });
}

function getParams() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('imdbID');
}

showMovieDetails();
