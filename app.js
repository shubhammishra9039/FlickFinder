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

let pagenumber=1

let cardDisply = document.getElementById("cardDisply");

async function getData(movieName,pagenumber) {
  console.log(movieName,pagenumber);
  cardDisply.innerHTML = "";
  try {
    movieData = await fetch(
      `https://www.omdbapi.com/?s=${movieName}&page=${pagenumber}&apikey=b30e7222`
    );

    cardDisply.innerHTML = "";
    movieData = await movieData.json();

    console.log(movieData);
    movieData = movieData.Search;
    console.log(movieData.length);

    loaderon(false);

    if (movieData.length === 0) {
      cardDisply.style.cssText = ` display: flex;
      align-items: center;
      justify-content: center;
      font-size: 45px;
      color: whitesmoke;`;
      cardDisply.innerHTML = `Movie Not Available`;
    }

    movieData.forEach(({ Title, Type, Year, Poster }) => {
      cardDisply.innerHTML += `
      <div class="card">
          <img src=${
            Poster === "N/A"?"Image/Broken-0004.jpg": Poster
          } alt="" />
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
      loaderon(false)
    cardDisply.style.cssText = ` display: flex;
    align-items: center;
    justify-content: center;
    font-size: 45px;
    color: whitesmoke;`;
    cardDisply.innerHTML = `Movie Not Available`;


  }
  return true;
}

getData("latest",pagenumber);

// fetch Data Using Api

let loader = document.querySelector(".loader");
console.log(loader);


//Loader
function loaderon(loaderTime) {
  if (loaderTime) {
    loader.classList.add("loader1");
  } else {
    loader.classList.remove("loader1");
  }
  // alert("Loder")
}

//Loader
// Search Function








let timeout = null;
var searchField="latest"

function search() {

  cardDisply.innerHTML = "";
  loaderon(true);
  clearTimeout(timeout);

   timeout = setTimeout(function () {
    searchField = document.getElementById("searchField").value.trim();

    getData(searchField,pagenumber);
}, 1000);




  // alert("done");
}

// Search Function

// buttons

function marvel() {

  searchField="marvel"
  getData(searchField,pagenumber);
}
function funny() {
  searchField="funny"
  getData(searchField,pagenumber);
  // alert("hy")
}
function animation() {
  searchField="animation"
  getData(searchField,pagenumber);
}
function webseries() {
  searchField="webseries"
  getData(searchField,pagenumber);
}

// buttons


// Show More... pages

function page(pagenumber)
{
 console.log(pagenumber);

  getData(searchField,pagenumber);
}