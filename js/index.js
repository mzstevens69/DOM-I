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
const links = document.querySelectorAll('a');
  for(let i = 0; i < links.length; i++) {
    links[i] = ['nav'][`nav-item-];
   
  }
});

// ////////header///////////////
const hdrText = document.querySelector('.cta-text h1');
hdrText.textContent = siteContent.cta['h1'];
const ctaImg = document.querySelector('#cta-img');
ctaImg.src = 'img/header-img.png';
const theBtn = document.querySelector('buttton');
theBtn.textContent = cta.button['Get Started'];






// /////////////main /////////////
// const h4 = document.querySelectorAll('.main-content h4');


// const paragraphs = document.querySelectorAll('main-content p');

// ///////////mid pic//////////////////////////////
const middleImage = document.querySelector('#middle-img');
middleImage.src = 'img/mid-page-accent.jpg';

// ////////////////////////////////
// const topContent = document.querySelector(".top-content");
// topContent.style.display = "flex";
// /////////////////////////////////////////
// const bottomContent = document.querySelector(".bottom-content");
// bottomContent.style.display = "flex";
// /////////contact/////////////////
// const contactSection = document.querySelectorAll(".contact");
// const contactHeader = document.querySelector(".contact h4");
// contactHeader.textContent = siteContent[`contact`]["contact-h4"];

// const contactPs = document.querySelectorAll(".contact p");
// contactPs[0].textContent = siteContent[`contact`]["address"];
// contactPs[1].textContent = siteContent[`contact`]["phone"];
// contactPs[2].textContent = siteContent[`contact`]["email"];

// /////////Footer//////////////////////
// const footer = document.querySelector("footer p");
// footer.textContent = siteContent[`footer`]["copyright"];


