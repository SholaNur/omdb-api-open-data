const searchInput = document.querySelector("#searchInput");
const searchBtn = document.querySelector("#searchBtn");
const myDiv = document.querySelector("#myDiv");
const posterImg = document.createElement("img");
const title = document.createElement("h3");

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

      myDiv.append(title, posterImg);
      console.log(posterImg);
    });
}

searchBtn.addEventListener("click", getValue);
