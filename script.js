/* affichage des titres des parties */
const threshold = .7
const options = {
  root: null,
  rootMargin: '0px',
  threshold
}

const handleIntersect = function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.intersectionRatio > threshold) {
      entry.target.classList.remove('reveal')
      entry.target.classList.add('reveal-visible')
      observer.unobserve(entry.target)
    }
  })
}

window.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver(handleIntersect, options)
  const targets = document.querySelectorAll('.reveal')
  targets.forEach(function (target) {
    observer.observe(target)
  })
})

/* changer la forme des images + chaanger affichage texte / description*/
function forme_image(thingId){
    var targetElement;
    targetElement = document.getElementById(thingId);
    if (targetElement.classList == "pair2") {
        document.getElementById(thingId).className = "pair";
    } else if (targetElement.classList == "pair") {
        document.getElementById(thingId).className = "pair2";
    } else if (targetElement.classList == "impair2") {
        document.getElementById(thingId).className = "impair";
    } else {
        document.getElementById(thingId).className = "impair2"
    }
}

/* reset les div (description + texte + image) */
function reset(thingId){
    var targetElement;
    targetElement = document.getElementById(thingId);

    if (targetElement.classList == "pair2") {
        document.getElementById(thingId).className = "pair";
    } else if (targetElement.classList == "impair2") {
        document.getElementById(thingId).className = "impair";
    }
}
