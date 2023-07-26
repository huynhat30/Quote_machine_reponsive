const randomQuote = () => {
    const quoteArray = [
      {id: 1,
          quote: "I have just three things to teach: simplicity, patience, compassion. These three are your greatest treasures.",
          author: "Lao Tzu"},
      {
          id: 2,
          quote: "Rule your mind or it will rule you.",
          author: "Horace"
      },
      {
          id: 3,
          quote: "Doing just a little bit during the time we have available puts you that much further ahead than if you took no action at all.",
          author: "Pulsifer, Take Action; Don't Procrastinate"
      }]
    
    const chooseRandomQuote = quoteArray[Math.floor(Math.random() * (quoteArray.length))];
    $("#text").html(chooseRandomQuote.quote);
    $("#author").html(chooseRandomQuote.author);
  }
  
  function go() {
    $("#new-quote").click(function() {
      randomQuote();
    });
    
    $("#tweet-quote").click(function() {
      
    });
    
    randomQuote();
  }
  
  window.onload = go;