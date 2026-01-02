const quote = document.getElementById("quote");

const quotes = [
    "hello",
    "how",
    "are",
    "you",
    "doing",
    "right",
    "now"
];

const usedIndexes =  new Set();





function generateQuote(){
    if(usedIndexes.size >= quotes.length) {
        usedIndexes.clear();
    }

    while(true){  

 const randindex =  Math.floor(Math.random()*quotes.length);

        if(usedIndexes.has(randindex) ) continue;

   
    const qu =quotes[randindex];
    quote.innerHTML = qu;

    usedIndexes.add(randindex);


    break;
}
    
}