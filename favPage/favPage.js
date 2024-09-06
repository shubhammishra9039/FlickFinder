let cardDisply = document.getElementById("cardDisply");
function getData() {
  let favMovie = JSON.parse(localStorage.getItem("favMovie")) || [];

  console.log(favMovie);

  favMovie.forEach(({ Title, Type, Year, Poster }, inx) => {
    cardDisply.innerHTML += `
        <div class="card">
            <img src=${
              Poster === "N/A" ? "Image/Broken-0004.jpg" : Poster
            } alt="" />
            <div class="info">
              <div class="conted">
                <h2>${Title} </h2>
                <p>Type : ${Type}</p>
                <p>Release Year : ${Year}</p>
              </div>
              <div class="icon">
               <button> <i class="ri-heart-3-fill"  id="${inx}"></i></button>
              </div>
            </div>
          </div>
        
        
        
        `;
  });
}





// ==========================



function favorite(e) {
    console.log(e.target);
  
    if (e.target.classList[0] == "ri-heart-3-fill") {
        e.target.classList.add("ri-heart-line");
        e.target.classList.remove("ri-heart-3-fill");

        let favMovie = JSON.parse(localStorage.getItem("favMovie")) || [];
  
        let movieAvailable = favMovie.findIndex(({ Title }) => {
          return favMovie[e.target.id].Title === Title;
        });
    
        if (movieAvailable) {
          favMovie.splice(movieAvailable, 1);
          localStorage.setItem("favMovie", JSON.stringify(favMovie));
        
          location.reload()

        }
    }
  
  
  }
  
  getData();