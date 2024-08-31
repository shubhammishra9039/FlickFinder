let bannerImage =["img1.jpg","img2.jpg","img3.jpg","img4.jpg"]



let imgBanner = document.getElementById("imgBanner")


let i = 0;
function change() {
 
  if (i < 3) {
    i++;
  } else  {
    i=0;
  }
  imgBanner.src= `Image/${bannerImage[i]}`
}


function left()
{
  if (i>0 && i < 3) {
    i--;
  } 
  else if(i==0)
  {
    i=3
  }else  {
    i=0;
  }
  imgBanner.src= `Image/${bannerImage[i]}` 
}

function right()
{
  if (i < 3) {
    i++;
  } else  {
    i=0;
  }
  imgBanner.src= `Image/${bannerImage[i]}` 
}


setInterval(change, 5000);
