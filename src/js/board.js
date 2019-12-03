

import { Card } from './card.js';
import { Character } from './character.js';

export class Board {

  constructor() {
    this.chars = [];
    this.deck = [];
    this.turns = 0;
    this.gameEnd = 6;
    this.numMatches = 0;
  }

  getCharacters() {
    for (var charIndex = 0; charIndex < 3; charIndex++) {
      var c = new Character(charIndex + 1);
      c.fetchChar();
      this.chars.push(c);
    }
  }
  printCharacters() {
    console.log("***printCharacters***");
    this.chars.forEach(function(char) {
      char.printPictures();
    });
  }

  createDeck() {
    var cardIndex = 0;
    for (var charIndex = 0; charIndex < 3; charIndex++) {
      for (var picIndex = 0; picIndex < 2; picIndex++) {
        var picURL = this.chars[charIndex].pictures[picIndex].large;
        var card = new Card(cardIndex, picURL);
        for (var i = 0; i < 2; i++) {
          this.deck.push(card);
        }
        cardIndex++;
      }
    }
    this.shuffleDeck();
  }
  shuffleDeck() {
    var i = this.deck.length, r = 0, temp = 0;
    while (--i > 0) {
      r = Math.floor(Math.random() * (i + 1));
      temp = this.deck[r];
      this.deck[r] = this.deck[i];
      this.deck[i] = temp;
    }
  }

  printDeck() {
    this.deck.forEach(function(card) {
      console.log(`cardId: ${card.getId()} URL: ${card.getPic()}`);
    });
  }

  getCards() {
    return this.deck;
  }




  //takeTurn()

  //match()



}
