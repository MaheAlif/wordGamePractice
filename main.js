let point = 0;

function handleKeyUp(event) {
  //    Catching the key pressed in the keyboard!
  let keyPressed = event.key;

  if(keyPressed === "Escape") {
    console.log("Game over!");
    
    let playGround = document.getElementById("playGround");
    playGround.classList.add("hidden");
    let scoreSection = document.getElementById('score');
    scoreSection.classList.remove("hidden");
    
    let showScore = document.getElementById('showScore').innerHTML = "Score : <span>"+ point + "</span>";
  }
  //   let keyBoardLayout = document.getElementsByClassName('kbd');
  //   console.log(keyBoardLayout);
  // document.getElementById(keyPressed).style.backgroundColor = "cyan";
  // document.getElementById(keyPressed).style.color = "black";

  // Save the original styles of the button
  const originalBackgroundColor = document.getElementById(keyPressed).style.backgroundColor;
  if(originalBackgroundColor === null) {
    originalBackgroundColor = "white";
  }
  const originalColor = document.getElementById(keyPressed).style.color;
  if(originalColor === null) {
    originalColor = "black";
  }

  // Change the button's color and background color
  document.getElementById(keyPressed).style.backgroundColor = "cyan";
  document.getElementById(keyPressed).style.color = "black";

  // Revert the button's styles after a delay
  setTimeout(() => {
    document.getElementById(keyPressed).style.backgroundColor = originalBackgroundColor;
    document.getElementById(keyPressed).style.color = originalColor;
  }, 800); 

  //   Catching the key shown int he window
  let winKey = document.getElementById("artboard").innerText.toLowerCase();

  //console.log("Score : " + score);
  console.log("Window key : " + winKey + " and pressed key : " + keyPressed);

  if (keyPressed === winKey) {
    console.log("It's a match!");
    //  Updating the score!
    point = parseInt(point + 1);
    //console.log("Point : " + point);
    document.getElementById("scoreBtn").innerHTML =
      "Score <span>" + point + "</span>";

    //  Resume the game!
    play();
  } else {
    console.log("Try again!");
  }
}

function randomAlphabet() {
  const alphabetString = "abcdefghijklmnopqrstuvwxyz";
  //console.log(alphabetString.length);
  const alphabets = alphabetString.split("");
  //console.log(alphabets);
  let randomNumber = Math.round(Math.random() * 25);
  //console.log(randomNumber);
  let randomAlphabet = alphabets[randomNumber];
  //console.log(randomAlphabet);
  return randomAlphabet;
}

function play() {
  let home = document.getElementById("home");
  let playGround = document.getElementById("playGround");
  //console.log(home);
  //console.log(playGround);
  home.classList.add("hidden");
  playGround.classList.remove("hidden");
  document.getElementById("score").classList.add("hidden");
  //console.log(likeScore);
  const rAlphabet = randomAlphabet();
  //console.log(rAlphabet);
  let artboard = document.getElementById("artboard");
  //console.log(artboard);
  artboard.innerText = rAlphabet;
  //artboard.append(rAlphabet);

  //   Matching input and output
  document.addEventListener("keyup", handleKeyUp);
}
function playAgain() {
  point = 0;
  document.getElementById("scoreBtn").innerHTML =
    "Score <span>" + point + "</span>";
  play();
}
