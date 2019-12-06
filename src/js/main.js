import '../css/styles.css';
import '../css/sketchyBootstrap.min.css';

import { Board } from './board.js';
// import { Card } from './card.js';
// import { Character } from './character.js';

var b = new Board();

b.getCharacters();

function populate(board) {

  board.switchStatus();

  var i = 0, selector = "", html = "";
  board.deck.forEach(function(card){
    selector = `#${i}`;
    // console.log(selector);
    html = `<span class="front cardId${card.getId()}"><img  src="${card.getPic()}"></span>`;
    $(selector).prepend(html);
    i++;
  });
}

function flip(selectorFront, selectorBack) {
  console.log(selectorFront + " " + selectorBack);
  $(selectorFront).show();
  $(selectorBack).hide();
}

function updateClicks(board) {
  board.addClick();
}

function hideCards() {
  $(".front").hide();
  $(".back").show();
}

function endTurn(board) {
  console.log("logging board: " + board + "num clicks" + board.numClicks);


  if ( board.getClicks() == board.getMaxClicks() ) {
    setTimeout(function(){hideCards();}, 1000);
    setTimeout(function(){board.resetClicks();}, 1000);


  }

}

function getId(event) {

   if (b.getClicks() == 2)
    return;

  if (b.gameStatus == false)
    return;

  let target = event.target;
  console.log(target);

  // if (target.tagName === "SPAN")
  //   return;

  while (target.tagName != "DIV") {
    target = target.parentNode;
  }

  var squareId = target.attributes.getNamedItem("id").value;
  console.log(`${target.attributes} , ${squareId}`);


  markCard(squareId);


}

function markCard(squareId) {

  var selectorFront = `#${squareId} > .front`;
  var selectorBack = `#${squareId} > .back`;

  flip(selectorFront, selectorBack);
  updateClicks(b);
  endTurn(b);


}

// function markCard(target) {
//   var card = target;
//   var selectorFront = `#${card} > .front`;
//   var selectorBack = `#${card} > .back`;
//
//   flip(selectorFront, selectorBack);
//   updateClicks(b);
//   endTurn(b);
// }





$('#getPics').click(function() {
  b.createDeck();

});

$('#getCards').click(function() {
  populate(b);
});

$(document).ready(function() {

  $('.col-sm').click({param1: b,}, getId);
  // $('.col-sm').click({param1: b,}, endTurn);
  // $('.col-sm').mouseleave(function() {
  //   endTurn(b);
  // });


  // console.log("origninal numClicks: " + numberOfClicks);
  // console.log("cardId: " + card);
  // console.log("click --> front selector: " + selectorFront);
  // console.log("click --> back selector: " + selectorBack);

    // //   var card =
  // });

});
