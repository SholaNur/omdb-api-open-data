const searchInput = document.querySelector("#searchInput");
const searchBtn = document.querySelector("#searchBtn");
const myDiv = document.querySelector("#myDiv");
const posterImg = document.createElement("img");
const title = document.createElement("h2");
const year = document.createElement("h5");
const rated = document.createElement("h5");
const release = document.createElement("h5");
const runTime = document.createElement("h5");
const genre = document.createElement("h5");
const director = document.createElement("h5");
const writer = document.createElement("h5");
const language = document.createElement("h5");
const country = document.createElement("h5");
const awards = document.createElement("h5");
const actors = document.createElement("h5");
const boxOffice = document.createElement("h5");

const apiKey = "1f2644ba";

function getValue() {
  let searchTerm = searchInput.value;
  const apiURL = `https://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`;
  console.log(apiURL);

  fetch(apiURL)
    .then((res) => res.json())
    .then((data) => {
      let dataObj = data;
      posterImg.src = dataObj.Poster;

      title.textContent = `Movie: ${dataObj.Title}`;
      actors.textContent = `Actors: ${dataObj.Actors}`;
      year.textContent = `Year: ${dataObj.Year}`;
      rated.textContent = `Rated: ${dataObj.Rated}`;
      release.textContent = `Released: ${dataObj.Released}`;
      runTime.textContent = `Run Time: ${dataObj.Runtime}`;
      genre.textContent = `Genre: ${dataObj.Genre}`;
      director.textContent = `Director: ${dataObj.Director}`;
      writer.textContent = `Writer: ${dataObj.Writer}`;
      language.textContent = `Language: ${dataObj.Language}`;
      country.textContent = `Country: ${dataObj.Country}`;
      boxOffice.textContent = `Box Office: ${dataObj.BoxOffice}`;

      myDiv.append(
        title,
        posterImg,
        actors,
        boxOffice,
        year,
        rated,
        release,
        runTime,
        genre,
        director,
        writer,
        language,
        country
      );
      console.log(posterImg);
    });
}

searchBtn.addEventListener("click", getValue);
