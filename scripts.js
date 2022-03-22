const quoteBtn = document.getElementById("quoteBtn");
const zenApiURL = "https://zenquotes.io/api/quotes/";

const getQuote = async (url) => {
    const response = await fetch(url);
    let data = await response.json();
    const quote = `${data.q} - ${data.a}`
    alert(quote)
}

quoteBtn.addEventListener('click',getQuote(zenApiURL));