(function() {

const anchors = document.querySelectorAll('a[href*="#"]');

for(let anchor of anchors){
  if(anchor.hash == '#help') {
    console.log('got it')
  }else {
    anchor.onclick = function(event){
      event.preventDefault();
      const allAnchors = anchor.getAttribute('href');
      document.querySelector(''+ allAnchors).scrollIntoView({
        behavior:'smooth',
        block:'start',
      });
    }
  }
}
})()