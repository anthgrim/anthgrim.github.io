let particlesArr = [];
let header = document.getElementById("header");

//Quotes
const quoteBtn = document.getElementById("quoteBtn");
const quoteAPIURL = "https://type.fit/api/quotes";

const randomNum = (scale) => {
  const ran = Math.floor(Math.random() * scale);
  return ran;
};

const getQuote = async () => {
  const res = await fetch(quoteAPIURL);
  const data = await res.json();
  return data;
};

const alertQuote = async () => {
  try {
    const quotes = await getQuote();
    const index = randomNum(quotes.length);
    const quote = `${quotes[index].text} - ${quotes[index].author}`;
    alert(quote);
  } catch (e) {
    console.log(e);
  }
};

quoteBtn.addEventListener("click", alertQuote);

//Animated background
const generateParticles = () => {
  let newParticle = document.createElement("div");
  newParticle.classList.add("particle");
  newParticle.style.left = `${Math.random() * header.clientWidth}px`;
  newParticle.style.top = `${Math.random() * header.clientHeight}px`;
  header.appendChild(newParticle);
  particlesArr.push(newParticle);
};

const resetParticles = () => {
  if (particlesArr.length === 0) return;
  for (let i = 0; i < particlesArr.length; i++) {
    particlesArr[i].remove();
  }
  particlesArr = [];
};

const animateParticles = () => {
  for (let i = 0; i < 50; i++) {
    generateParticles();
  }
};

setInterval(() => {
  resetParticles();
  animateParticles();
}, 100);

//Uncollapsed on click
let collapsed = document.getElementsByClassName("collapsed-content");
let collapser = document.querySelectorAll("#collapser");

for (let i = 0; i < collapser.length; i++) {
  collapser[i].addEventListener("click", () => {
    if (window.innerWidth <= 1000) {
      collapsed[i].classList.toggle("collapse");
    }
  });
}

//MediaQuery-like function for collapsables
const resizeCollapsables = () => {
  let windowWidth = window.innerWidth;
  for (let i = 0; i < collapsed.length; i++) {
    if (windowWidth > 1000) {
      collapsed[i].classList.remove("collapse");
    } else {
      collapsed[i].classList.add("collapse");
    }
  }
};

window.onresize = resizeCollapsables;
window.onload = resizeCollapsables;
