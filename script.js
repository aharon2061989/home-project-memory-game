const cards = document.querySelectorAll(".memory-card");
var hasFlippedCard = false;
var lockBoard = false;
var firstCard;
var secondCard;

$("#randon-button").click(function() {
  var randomChoice = Math.floor(Math.random() * 4);
  console.log(randomChoice)
  if(randomChoice === 0) {
    harry();
  }
  else if(randomChoice === 1) {
    dogs();
  }
  else if(randomChoice === 2) {
    marvel();
  }
  else if(randomChoice === 3) {
    flags();
  }
})

$("#harry-button").click(harry);
$("#dogs-button").click(dogs);
$("#marvel-button").click(marvel);
$("#flags-button").click(flags);


shuffle();
cards.forEach((card) => {
  card.addEventListener("click", flipCard);
});


function shuffle() {
  cards.forEach((card) => {
    let randomPosition = Math.floor(Math.random() * 12); // give me random numbers between 0 - 11
    card.style.order = randomPosition;
  });
}

function flipCard() {
  if (lockBoard) {
    return;
  } else if (this === firstCard) {
    return;
  } else {
    this.classList.add("flip");
  
    if (!hasFlippedCard) {
      hasFlippedCard = true;
      firstCard = this;
      return;

    } else {
      secondCard = this;
      checkForMatch();
    }
  }
  setTimeout(() => {
    if(hasFlippedCard)
    this.class.remove("flip")
  })
}

function checkForMatch() {
  lockBoard = true;
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);
  resetBoard();
}

function unflipCards() {
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    resetBoard();
  }, 1500);
}

function resetBoard() {
  hasFlippedCard = false;
  lockBoard = false;
  firstCard = null;
  secondCard = null;
}

function harry() {
  $(".memory-game").removeClass("memory-game-unseen");
  $(".button-container").addClass("remov-buttons");
  $.ajax({
    url: "https://hp-api.onrender.com/api/characters/house/gryffindor",
    type: "GET",
    dataType: "json",
    success: function (response) {
      var harry = response[0].image;
     $(".back-face").attr("src", harry);
     var hermaione = response[1].image;
     $("#first-front").attr("src", hermaione);
     $("#second-front").attr("src", hermaione);
     var ron = response[2].image;
     $("#third-front").attr("src", ron);
     $("#four-front").attr("src", ron);
     var minerva = response[3].image;
     $("#five-front").attr("src", minerva);
     $("#six-front").attr("src", minerva);
     var hagrid = response[4].image;
     $("#seven-front").attr("src", hagrid);
     $("#eight-front").attr("src", hagrid);
     var longbottom = response[5].image;
     $("#nine-front").attr("src", longbottom);
     $("#ten-front").attr("src", longbottom);
     var ginny = response[6].image;
     $("#eleven-front").attr("src", ginny);
     $("#twelve-front").attr("src", ginny);
  
    },
  });
}

function dogs() {
  $(".memory-game").removeClass("memory-game-unseen");
  $(".button-container").addClass("remov-buttons");
  $.ajax({
    url: "https://dog.ceo/api/breeds/image/random/7",
    type: "GET",
    dataType: "json",
    success: function (response) {
      var dogs = response.message[0];
      $(".back-face").attr("src", dogs);
      var firstDog = response.message[1];
      $("#first-front").attr("src", firstDog);
      $("#second-front").attr("src", firstDog);
      var secondDog = response.message[2];
      $("#third-front").attr("src", secondDog);
      $("#four-front").attr("src", secondDog);
      var thirdDog = response.message[3];
      $("#five-front").attr("src", thirdDog);
      $("#six-front").attr("src", thirdDog);
      var fourDog = response.message[4];
      $("#seven-front").attr("src", fourDog);
      $("#eight-front").attr("src", fourDog);
      var fiveDog = response.message[5];
      $("#nine-front").attr("src", fiveDog);
      $("#ten-front").attr("src", fiveDog);
      var sixDog = response.message[6];
      $("#eleven-front").attr("src", sixDog);
      $("#twelve-front").attr("src", sixDog);
    }
  })
};

function marvel() {
  $(".memory-game").removeClass("memory-game-unseen");
  $(".button-container").addClass("remov-buttons");
  var heroes = "img/avengers.webp"
  $(".back-face").attr("src", heroes);
  var wonderWoman = "img/Wonder_Woman.webp";
  $("#first-front").attr("src", wonderWoman);
  $("#second-front").attr("src", wonderWoman);
  var catWoman = "img/Catwoman.jpg";
  $("#third-front").attr("src", catWoman);
  $("#four-front").attr("src", catWoman);
  var flash = "img/the-flash.webp";
  $("#five-front").attr("src", flash);
  $("#six-front").attr("src", flash);
  var batman = "img/Batman_Vol_3_86_Textless.webp";
  $("#seven-front").attr("src", batman);
  $("#eight-front").attr("src", batman);
  var Spiderman = "img/spiderman.jpg";
  $("#nine-front").attr("src", Spiderman);
  $("#ten-front").attr("src", Spiderman);
  var Ironman = "img/ironman.webp";
  $("#eleven-front").attr("src", Ironman);
  $("#twelve-front").attr("src", Ironman);
};

function flags() {
  $(".memory-game").removeClass("memory-game-unseen");
  $(".button-container").addClass("remov-buttons");
  var flags ="https://flagsapi.com/IL/shiny/64.png"
  $(".back-face").attr("src", flags);
  var brazil = "https://flagsapi.com/BR/shiny/64.png";
  $("#first-front").attr("src", brazil);
  $("#second-front").attr("src", brazil);
  var argentina = "https://flagsapi.com/AR/shiny/64.png";
  $("#third-front").attr("src", argentina);
  $("#four-front").attr("src", argentina);
  var chile = "https://flagsapi.com/CL/shiny/64.png";
  $("#five-front").attr("src", chile);
  $("#six-front").attr("src", chile);
  var ireland = "https://flagsapi.com/IE/shiny/64.png";;
  $("#seven-front").attr("src", ireland);
  $("#eight-front").attr("src", ireland);
  var france = "https://flagsapi.com/FR/shiny/64.png";
  $("#nine-front").attr("src", france);
  $("#ten-front").attr("src", france);
  var colombia = "https://flagsapi.com/CO/shiny/64.png";
  $("#eleven-front").attr("src", colombia);
  $("#twelve-front").attr("src", colombia);
};




