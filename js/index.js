const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// navigation

// const navIetms = document.querySelectorAll('header nav a');
// navItems 

const navLogo = document.querySelector('#logo-img');
navLogo.src = 'img/logo.png';
// /////a links///////////////
 const nav = document.querySelector('nav');
  const firstA = document.createElement('a');
  firstA.textContent = 'first link';
  nav.prepend(firstA);
  const LastA = document.createElement('a');
  LastA.textContent = 'last link'
  nav.append(LastA);

  const allA = document.querySelectorAll('a');
  allA[1].textContent = siteContent['nav']['nav-item-1'];
  allA[2].textContent = siteContent['nav']['nav-item-2'];
  allA[3].textContent = siteContent['nav']['nav-item-3'];
  allA[4].textContent = siteContent['nav']['nav-item-4'];
  allA[5].textContent = siteContent['nav']['nav-item-5'];
  allA[6].textContent = siteContent['nav']['nav-item-6'];

  allA.forEach(a => (a.style.color= 'green'));

  
   
  


// ////////header///////////////
const hdrText = document.querySelector('.cta-text h1');
hdrText.textContent = siteContent.cta['h1'];
const ctaImg = document.querySelector('#cta-img');
ctaImg.src = 'img/header-img.png';
const theBtn = document.querySelector('.cta-text button');
theBtn.textContent = 'Get Started';






// /////////////main /////////////


const h4 = document.querySelectorAll('.main-content h4');

h4[0].textContent = siteContent['main-content']['features-h4'];
h4[1].textContent = siteContent['main-content']['about-h4'];
h4[2].textContent = siteContent['main-content']['services-h4'];
h4[3].textContent = siteContent['main-content']['product-h4'];
h4[4].textContent = siteContent['main-content']['vision-h4'];



//================== Paragraphs
const pTag = document.querySelectorAll('.main-content p');

pTag [0].textContent = siteContent['main-content']['features-content'];
pTag [1].textContent = siteContent['main-content']['about-content'];
pTag [2].textContent = siteContent['main-content']['services-content'];
pTag [3].textContent = siteContent['main-content']['product-content'];
pTag [4].textContent = siteContent['main-content']['vision-content'];




// ///////////mid pic//////////////////////////////
const middleImage = document.querySelector('#middle-img');
middleImage.src = 'img/mid-page-accent.jpg';

// ////////////////////////////////
const topContent = document.querySelector(".top-content");
topContent.style.display = "flex";
// /////////////////////////////////////////
// const bottomContent = document.querySelector(".bottom-content");
// bottomContent.style.display = "flex";
// /////////contact/////////////////
const contactSection = document.querySelectorAll(".contact");
const contactHeader = document.querySelector(".contact h4");
contactHeader.textContent = siteContent[`contact`]["contact-h4"];

const contactPs = document.querySelectorAll(".contact p");
contactPs[0].textContent = siteContent[`contact`]["address"];
contactPs[1].textContent = siteContent[`contact`]["phone"];
contactPs[2].textContent = siteContent[`contact`]["email"];

/////////Footer//////////////////////
const footer = document.querySelector("footer p");
footer.textContent = siteContent[`footer`]["copyright"];


