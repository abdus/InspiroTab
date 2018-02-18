"use strict"




// API calling starts    // 
function apiCalling(){


    // api for quotes 

    fetch("https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous&count=10", {
        headers: {
        Accept: "json",
        "X-Mashape-Key": "vSjWiX3sVGmshKKqT28QaWCPjKvVp1eiPuDjsn35NyMmMvQGzF"
        }
    })
    .then(response => response.json())
    .then(function (data){
        document.getElementById("daily-quote").innerHTML = (data.quote);
        document.getElementById("quote-author").innerHTML = (data.author);
        console.log(data);
    })
}

// api function called //
apiCalling();

/***********   END of API ************/