(function() {

const anchors = document.querySelectorAll('a[href*="#"]');

for(let anchor of anchors){
  anchor.onclick = function(event){
    let allAnchors = anchor.getAttribute('href');
    let smoothFlow = (event, anchors) => {
      event.preventDefault();
      document.querySelector(''+ anchors).scrollIntoView({
        behavior:'smooth',
        block:'start',
      });
    }

    if(event.target.className.includes('mainContent__btn')) {
      smoothFlow(event, allAnchors)
    }else {
      mobileBtnSwitcher();
      smoothFlow(event, allAnchors)
    }
    
  }
}

  //Burger menu

  const mobileNavBtn = document.querySelector('.mobileBtn');
  const mobileNav = document.querySelector('.nav');
  const body = document.querySelector('.page');
  const overlay = document.querySelector('.overlay');

  const input = () => {
    setTimeout(() => mobileNav.classList.toggle('nav_active'), 10);
    mobileNav.style.display = 'flex';
    mobileNavBtn.classList.toggle('mobileBtn_active');
    body.classList.toggle('page_unactive');
    overlay.style.display = 'block';
  }
  const output = () => {
    setTimeout(() => mobileNav.style.display = 'none', 400);
    mobileNav.classList.toggle('nav_active');
    mobileNavBtn.classList.toggle('mobileBtn_active');
    body.classList.toggle('page_unactive');
    overlay.style.display = 'none';
  }
  const mobileBtnSwitcher = () => {
    mobileNav.className.includes('nav_active') 
    ? 
    output()
    : 
    input();
  }
  mobileNavBtn.onclick = () => {
    mobileBtnSwitcher()
  }
  overlay.onclick = () => {
    mobileBtnSwitcher()
  }

})()