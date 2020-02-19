class Deck {
  constructor() {
    this.cards = [];
    this.matchedCards = [];
    this.selectedCards = [];
  }

  shuffle() {
    //when the user starts a new game, the cards should be shuffled
  }

  checkSelected(card) {
    //when a card is clicked, it should be moved to the selectedCards array
    //if a card is clicked a second time, there should still only be one of that
    //card in the selectedCards array
  }

  moveToMatched(card) {
    //if 2 cards are matched, move that pair to the matchedCards array
  }
}
