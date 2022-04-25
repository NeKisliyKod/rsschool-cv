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

    if(!mobileNav.className.includes('nav_active')) {
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
  const OVERLAY = document.querySelector('.overlay');


  const input = () => {
    setTimeout(() => mobileNav.style.display = 'flex', 4);
    mobileNav.classList.add('nav_active');
    mobileNavBtn.classList.add('mobileBtn_active');
    body.classList.add('page_unactive');
    OVERLAY.classList.add('overlay_active');
  }
  const output = () => {
    setTimeout(() => mobileNav.style.display = 'none', 400);
    mobileNav.classList.remove('nav_active');
    mobileNavBtn.classList.remove('mobileBtn_active');
    body.classList.remove('page_unactive');
    OVERLAY.classList.remove('overlay_active');
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
  OVERLAY.onclick = () => {
    let popup = document.querySelector('.popup');

    if(mobileNav.className.includes('nav_active')){
      setTimeout(() => mobileNav.style.display = 'none', 400);
      mobileNav.classList.remove('nav_active');
      mobileNavBtn.classList.remove('mobileBtn_active');
    }else if(popup){
      popup.classList.remove('popup_active');
    }

    body.classList.remove('page_unactive');
    OVERLAY.classList.remove('overlay_active');
  }

  // Randon slider

  let allPets = [
    {
      "name": "Jennifer",
      "img": "../../assets/images/pets/jennifer.png",
      "type": "Dog",
      "breed": "Labrador",
      "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
      "age": "2 months",
      "inoculations": ["none"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Sophia",
      "img": "../../assets/images/pets/sophia.png",
      "type": "Dog",
      "breed": "Shih tzu",
      "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
      "age": "1 month",
      "inoculations": ["parvovirus"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Woody",
      "img": "../../assets/images/pets/woody.png",
      "type": "Dog",
      "breed": "Golden Retriever",
      "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
      "age": "3 years 6 months",
      "inoculations": ["adenovirus", "distemper"],
      "diseases": ["right back leg mobility reduced"],
      "parasites": ["none"]
    },
    {
      "name": "Scarlett",
      "img": "../../assets/images/pets/scarlet.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
      "age": "3 months",
      "inoculations": ["parainfluenza"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Katrine",
      "img": "../../assets/images/pets/katrine.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
      "age": "6 months",
      "inoculations": ["panleukopenia"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Timmy",
      "img": "../../assets/images/pets/timmy.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
      "age": "2 years 3 months",
      "inoculations": ["calicivirus", "viral rhinotracheitis"],
      "diseases": ["kidney stones"],
      "parasites": ["none"]
    },
    {
      "name": "Freddie",
      "img": "../../assets/images/pets/freddie.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
      "age": "2 months",
      "inoculations": ["rabies"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Charly",
      "img": "../../assets/images/pets/charly.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
      "age": "8 years",
      "inoculations": ["bordetella bronchiseptica",  "leptospirosis"],
      "diseases": ["deafness", "blindness"],
      "parasites": ["lice", "fleas"]
    }
  ];

  let generatePet = (pets, number) => {
    let pet = `
      <div class="slider__elemWrapper">
        <img class="slider__elemImg" src=${pets[number].img} alt=${pets[number].name}>
        <p class="slider__elemName">${pets[number].name}</p>
        <button class="slider__elemBtn btn btn_invers" type="button">
          Learn more
        </button>
      </div>
    `
    return pet;
  }

  let randomSlides = (childrenNum) => {
    let randomSlide = document.querySelector('#slidesList').children[childrenNum];
    let defaultSlide = document.querySelector('#slidesList').children[1];
    let prevNames = '';

    randomSlide.innerHTML = ''
    
    for(let i = 0; i <= defaultSlide.children.length - 1; i ++){
      prevNames += defaultSlide.children[i].children[1].innerHTML;
    }
    
    for(let i = 0; i <= defaultSlide.children.length - 1; i ++){
      let sortedPets = allPets.filter((item) => {
        if(!prevNames.includes(item.name)){
          return item
        }
      })
      let random = Math.floor(Math.random() * sortedPets.length);
      prevNames += sortedPets[random].name;
      randomSlide.innerHTML += generatePet(sortedPets, random)
    }
  }
  randomSlides(0);
  randomSlides(2);

  

  let slider = () => {
    const LEFT_BTN = document.querySelector('#leftBtn');
    const RIGHT_BTN = document.querySelector('#rightBtn');
    const slidesList = document.querySelector('#slidesList');
    
    const moveLeft = () => {
      slidesList.classList.add('slider__images_moveLeft')
      LEFT_BTN.removeEventListener('click', moveLeft);
      RIGHT_BTN.removeEventListener('click', moveRight);
    };
    const moveRight = () => {
      slidesList.classList.add('slider__images_moveRight')
      LEFT_BTN.removeEventListener('click', moveLeft);
      RIGHT_BTN.removeEventListener('click', moveRight);
    };

    LEFT_BTN.addEventListener('click', moveLeft);
    RIGHT_BTN.addEventListener('click', moveRight);

    slidesList.addEventListener('animationend', (event) => {
      if(event.animationName == 'move-left') {
        slidesList.classList.remove('slider__images_moveLeft');
        slidesList.children[1].innerHTML = slidesList.children[0].innerHTML
        randomSlides(0);
      }else {
        slidesList.classList.remove('slider__images_moveRight');
        slidesList.children[1].innerHTML = slidesList.children[2].innerHTML
        randomSlides(2);
      }

      LEFT_BTN.addEventListener('click', moveLeft);
      RIGHT_BTN.addEventListener('click', moveRight);
      Popup();

    })
  }
  slider();

  //Popup

  let Popup = () => {
    let cards = document.querySelectorAll('.slider__elemWrapper');
    const PET_POPUP = document.querySelector('#petPopup');
    let popupGenerator = (pet) => {
      let petPopup = `
        <div class="popup popup_active">
          <figure class="popupCard">
            <button class="popupCard__btn" type="button">
              <img src="../../assets/images/icons/close.svg" alt="close">
            </button>
            <img class="popupCard__img" src="${pet.img}" alt="${pet.name}">
            <figcaption class="popupCard__discr">
              <h4 class="popupCard__name">
                ${pet.name}
              </h4>
              <p class="popupCard__breed">
                ${pet.type} - ${pet.breed}
              </p>
              <p class="popupCard__content">
                ${pet.description}
              </p>
              <ul class="popupCard__personalInfo">
                <li class="popupCard__petInfo"><span>Age:</span>${pet.age}</li>
                <li class="popupCard__petInfo"><span>Inoculations:</span>${pet.inoculations}</li>
                <li class="popupCard__petInfo"><span>Diseases:</span>${pet.diseases}</li>
                <li class="popupCard__petInfo"><span>Parasites:</span>${pet.parasites}</li>
              </ul>
            </figcaption>
          </figure>
        </div>
      `
      return petPopup;
    }

    cards.forEach((card) => {
      card.addEventListener('click', (event) => {
        let name = '';

        if(event.target.nodeName == 'DIV'){
          name = event.target.children[1].innerHTML;
        }else name = event.target.parentElement.children[1].innerHTML;

        let pet = allPets.filter((elem) => elem.name === name)[0];

        PET_POPUP.innerHTML = popupGenerator(pet);

        OVERLAY.classList.add('overlay_active');
        body.classList.add('page_unactive');

        let closeBtn = document.querySelector('.popupCard__btn');
        
        closeBtn.addEventListener('click', () => {
          document.querySelector('.popup').classList.remove('popup_active');
          body.classList.remove('page_unactive');
          OVERLAY.classList.remove('overlay_active');
        })
      })
    })
  }
  Popup(); 
  console.dir(document.querySelector('#t'))
})()