import StarRating from './star-rating/index.js';

const $containers = [...document.querySelectorAll('.star-rating')];
const $currentRatings = document.querySelectorAll('.current-rating > span');

$containers.forEach(($container, i) => {
 
  StarRating($container);

  
  $container.addEventListener('rating-change', e => {
    const rating = e.detail;
    $currentRatings[i].textContent = rating;
  });
});

let container = document.getElementsByTagName("head")[0];
let linkElement = document.createElement("link");
linkElement.rel = "stylesheet";
linkElement.href = "./star-rating/theme.css";
container.appendChild(linkElement);