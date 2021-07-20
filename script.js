let slider = document.getElementById("range");
let num = document.getElementById("price");
let pageviews = document.getElementById("views");

num.innerHTML = '$'+slider.value+'.00'; 

slider.oninput = function() {
  
  num.innerHTML = '$'+this.value+'.00';

  switch(this.value) {
    case "8":   pageviews.innerHTML = "10K PAGEVIEWS";
                break;
    case "12":  pageviews.innerHTML = "20K PAGEVIEWS";
                break;   
    case "16":  pageviews.innerHTML = "50K PAGEVIEWS";
                break;
    case "20":  pageviews.innerHTML = "100K PAGEVIEWS";
                break;
    case "24":  pageviews.innerHTML = "200K PAGEVIEWS";
                break;
    case "28":  pageviews.innerHTML = "500K PAGEVIEWS";
                break;
    case "32":  pageviews.innerHTML = "1M PAGEVIEWS";
                break;
    case "36":  pageviews.innerHTML = "2M PAGEVIEWS";
                break;
    case "40":  pageviews.innerHTML = "5M PAGEVIEWS";
                break;
  }
  
}