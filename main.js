// KF Panda Search

// HTML Variables
let charNameE1 = document.getElementById("char-name");
let charQuoteE1 = document.getElementById("char-quote");
let charImg = document.getElementById("char-img");
let div = document.getElementById("div");
let h1 = document.getElementById("h1");
let body = document.getElementById("body");
let h2 = document.getElementById("h2");

document.getElementById("btn").addEventListener("click", btnClicked);
document.getElementById("theme-btn").addEventListener("click", btnTheme);

function btnTheme() {
  // 2
  let colour = document.getElementById("theme-in").value.toLowerCase();

  if (colour === "dark" || colour === "black") {
    h1.style.color = "white";
    body.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    h1.style.color = "white";
    charNameE1.style.color = "white";
    charQuoteE1.style.color = "white";
  } else if (colour === "light" || colour === "white") {
    body.style.backgroundColor = "rgba(255,255,255, 0.7)";
    h1.style.color = "black";
    charNameE1.style.color = "black";
    charQuoteE1.style.color = "black";
  }
}

function btnClicked() {
  let name = document.getElementById("char-in").value.toLowerCase();

  // If statement - test the input
  // 1
  if (name === "po" || name === "dragon worrior" || name === "kung fu panada") {
    charNameE1.innerHTML = "po";
    charQuoteE1.innerHTML = "Buddy, I am the Dragon Warrior!";
    charImg.src = "img/po.png";
  } else if (name === "tigress") {
    charNameE1.innerHTML = "tigress";
    charQuoteE1.innerHTML = "That was hardcore!";
    charImg.src = "img/tigress.png";
  } else if (name === "mantis") {
    charNameE1.innerHTML = "mantis";
    charQuoteE1.innerHTML = "Fear the Bug!";
    charImg.src = "img/mantis.png";
  } else if (name === "monkey") {
    charNameE1.innerHTML = "monkey";
    charQuoteE1.innerHTML = "We should hang out.";
    charImg.src = "img/monkey.png";
  } else if (name === "boss-wolf") {
    charNameE1.innerHTML = "boss wolf";
    charQuoteE1.innerHTML = "Chew on that, tubby!";
    charImg.src = "img/boss-wolf.png";
  } else if (name === "crane") {
    charNameE1.innerHTML = "crane";
    charQuoteE1.innerHTML =
      "Stop flapping your mouth and start flapping your wings.";
    charImg.src = "img/crane.png";
  } else if (name === "croc") {
    charNameE1.innerHTML = "croc";
    charQuoteE1.innerHTML = "No quote";
    charImg.src = "img/croc.png";
  } else if (name === "kai") {
    charNameE1.innerHTML = "kai";
    charQuoteE1.innerHTML = "No quote";
    charImg.src = "img/kai.png";
  } else if (name === "mr.ping") {
    charNameE1.innerHTML = "mr.ping";
    charQuoteE1.innerHTML =
      "To make something special, you just have to believe it's special.";
    charImg.src = "img/mr-ping.png";
  } else if (name === "oogway") {
    charNameE1.innerHTML = "oogway";
    charQuoteE1.innerHTML = "Remember the path.";
    charImg.src = "img/oogway.png";
  } else if (name === "shen") {
    charNameE1.innerHTML = "shen";
    charQuoteE1.innerHTML =
      "My father's throne. He used to let me play here at his side, promising one day this throne would be mine...";
    charImg.src = "img/shen.png";
  } else if (name === "shifu") {
    charNameE1.innerHTML = "shifu";
    charQuoteE1.innerHTML =
      "What goes on in your head I really don't always understand, but what goes on in your heart will never let us down.";
    charImg.src = "img/shifu.png";
  } else if (name === "soothsayer") {
    charNameE1.innerHTML = "soothsayer";
    charQuoteE1.innerHTML =
      "Even with his poor eyesight, he can see the truth. Why is it that you cannot?";
    charImg.src = "img/soothsayer.png";
  } else if (name === "storming") {
    charNameE1.innerHTML = "storming";
    charQuoteE1.innerHTML = "No quote";
    charImg.src = "img/storming.png";
  } else if (name === "tai-lung") {
    charNameE1.innerHTML = "tai-lung";
    charQuoteE1.innerHTML =
      "So that is his name: Po... Finally, a worthy opponent! Our battle will be legendary!";
    charImg.src = "img/tai-lung.png";
  } else if (name === "viper") {
    charNameE1.innerHTML = "viper";
    charQuoteE1.innerHTML = "I don't need to bite to fight!";
    charImg.src = "img/viper.png";
  } else {
    charNameE1.innerHTML = "?????";
    charQuoteE1.innerHTML = "----------";
    charImg.src = "img/question-mark.png";
  }
}
