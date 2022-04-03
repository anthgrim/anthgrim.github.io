//Resume Download

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
