// Banner ===========================

let bannerImage = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg"];

let imgBanner = document.getElementById("imgBanner");

let i = 0;
function change() {
  if (i < 3) {
    i++;
  } else {
    i = 0;
  }
  imgBanner.src = `Image/${bannerImage[i]}`;
}

function left() {
  if (i > 0 && i < 3) {
    i--;
  } else if (i == 0) {
    i = 3;
  } else {
    i = 0;
  }
  imgBanner.src = `Image/${bannerImage[i]}`;
}

function right() {
  if (i < 3) {
    i++;
  } else {
    i = 0;
  }
  imgBanner.src = `Image/${bannerImage[i]}`;
}

setInterval(change, 5000);

//Banner =======================================

// Search button  ================================

const searchElement = document.querySelector(".search-bar-container");
const maginfireEl = document.querySelector(".ri-search-eye-line");

maginfireEl.addEventListener("click", () => {
  searchElement.classList.toggle("active");
});

// Search button ====================

// fetch Data Using Api

let movieData;

let cardDisply = document.getElementById("cardDisply");

async function getData(movieName) {
  console.log(movieName);
  cardDisply.innerHTML = "";
  try {
    movieData = await fetch(
      `https://www.omdbapi.com/?s=${movieName}&apikey=b30e7222`
    );

    movieData = await movieData.json();
    console.log(movieData);
    movieData = movieData.Search;
    console.log(movieData);

    movieData.forEach(({ Title, Type, Year, Poster }) => {
      cardDisply.innerHTML += `
      <div class="card">
          <img src="${Poster}" alt="" />
          <div class="info">
            <div class="conted">
              <h2>${Title} </h2>
              <p>Type : ${Type}</p>
              <p>Release Year : ${Year}</p>
            </div>
            <div class="icon">
             <button> <i class="ri-heart-line"></i></button>
            </div>
          </div>
        </div>
      
      
      
      `;
    });
    return movieData;
  } catch (Error) {
    cardDisply.style.cssText = ` display: flex;
    align-items: center;
    justify-content: center;
    font-size: 45px;
    color: whitesmoke;`;
    cardDisply.innerHTML = `Movie Not Available`;
  }
}

getData("latest");

// fetch Data Using Api

// Search Function

function search() {
  var searchField = document.getElementById("searchField").value.trim();

  getData(searchField);

  // alert("done");
}

// Search Function

// buttons

function marvel() {
  getData("marvel");
}
function funny() {
  getData("funny");
  // alert("hy")
}
function animation() {
  getData("animation");
}
function webseries() {
  getData("webseries");
}

// buttons
