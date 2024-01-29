console.log("Welcome to TicTacToe Game!");
let backgroundMusic = new Audio("music/music.mp3");
let turnmusic = new Audio("music/ting.mp3");
let gameovermusic = new Audio("music/gameover.mp3");
let turn = "X";
let isgameOver = false;

// function to change turn
const changeTurn = () => {
  return turn === "X" ? "0" : "X";
};

// function to check for win.

const checkWinforLarge = () => {
  let boxtext = document.getElementsByClassName("boxtext");
  let winsforLarge = [
    [0, 1, 2, -20, 5, 0],
    [3, 4, 5, -20, 15, 0],
    [6, 7, 8, -20, 25, 0],
    [0, 3, 6, -30, 15, 90],
    [1, 4, 7, -20, 15, 90],
    [2, 5, 8, -10, 15, 90],
    [0, 4, 8, -20, 15, 45],
    [2, 4, 6, -20, 15, 135],
  ]; // for larger page


  winsforLarge.forEach((e) => {
    if (
      boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[2]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[0]].innerText !== ""
    ) {
      document.querySelector(".info").innerText =
        boxtext[e[0]].innerText + " Won";
      isgameOver = true;
      document
        .querySelector(".imgbox")
        .getElementsByTagName("img")[0].style.width = "200px";
      document.querySelector(".line").style.width = "35vw";
      document.querySelector(
        ".line"
      ).style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;
      gameovermusic.play();
    }
  });
};


const checkWinforSmall = () => {
  let boxtext = document.getElementsByClassName("boxtext");
  
  let winsforSmall = [
    [0, 1, 2, 0, 10, 0],
    [3, 4, 5, 0, 30, 0],
    [6, 7, 8, 0, 50, 0],
    [0, 3, 6, -20, 30, 90],
    [1, 4, 7, 0, 30, 90],
    [2, 5, 8, 20, 30, 90],
    [0, 4, 8, 0, 30, 45],
    [2, 4, 6, 0, 30, 135],
  ]; // for smaller page

  winsforSmall.forEach((e) => {
    if (
      boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[2]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[0]].innerText !== ""
    ) {
      document.querySelector(".info").innerText =
        boxtext[e[0]].innerText + " Won";
      isgameOver = true;
      document
        .querySelector(".imgbox")
        .getElementsByTagName("img")[0].style.width = "200px";
      document.querySelector(".line").style.width = "55vw";
      document.querySelector(
        ".line"
      ).style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;
      gameovermusic.play();
    }
  });
};


// Game Logic

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".boxtext");
  element.addEventListener("click", () => {
    if (boxtext.innerText === "" && isgameOver === false) {
      boxtext.innerText = turn;
      turn = changeTurn();
      turnmusic.play();
      // checkWin();

      if (document.documentElement.clientWidth > 800) {
        checkWinforLarge();
      } else {
        checkWinforSmall();
      }

      if (!isgameOver) {
        document.getElementsByClassName("info")[0].innerText =
          "Turn for  " + turn;
      }
    }
  });
});

// Add onclick listener to reset button
reset.addEventListener("click", () => {
  let boxtexts = document.querySelectorAll(".boxtext");
  Array.from(boxtexts).forEach((element) => {
    element.innerText = "";
  });
  turn = "X";
  isgameOver = false;
  document.getElementsByClassName("info")[0].innerText = "Turn for  " + turn;
  document.querySelector(".line").style.width = "0vw";
  document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width =
    "0px";
});
