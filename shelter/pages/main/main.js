(function() {

const anchors = document.querySelectorAll('a[href*="#"]');

for(let anchor of anchors){
  anchor.onclick = function(event){
    event.preventDefault();
    const allAnchors = anchor.getAttribute('href');
    document.querySelector(''+ allAnchors).scrollIntoView({
      behavior:'smooth',
      block:'start',
    });
  }
}

})()