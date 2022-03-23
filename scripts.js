const quoteBtn = document.getElementById("quoteBtn");
const quoteAPIURL = "https://type.fit/api/quotes";

const randomNum = (scale) => {
    const ran = Math.floor(Math.random() * scale);
    return ran;
}

function getQuote () {
    fetch(quoteAPIURL)
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            const info = data;
            const index = randomNum(info.length)
            alert(`${info[index].text} - ${info[index].author}`)
        })
        .catch((error) => {
            alert("Something went wrong :(")
            console.log(error)
        })
}

quoteBtn.addEventListener('click',getQuote);