function cardshuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function Deck(){
  //private variable
  var spade = '\u2660';
  var heart = '\u2665';
  var diamond = '\u2666';
  var club = '\u2663';
  //public variable
  this.deck = [];
  this.createdeck = function(){
    var suits = [spade, heart, diamond, club];
    var cards = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    for(var i = 0; i < suits.length; i++){
      for(var j = 0; j < cards.length; j++){
        var str = suits[i] +" "+ cards[j];
        this.deck.push(str);
      }
    }
    return this.deck;
  }
  this.shuffle = function(){
    this.deck = cardshuffle(this.deck);
    return this.deck;
  }
  this.reset = function(){
    this.deck = [];
    this.createdeck();
    return this.deck;
  }
  this.deal = function(){
    if(this.deck.length > 0){
      this.shuffle();
      var card = this.deck.shift();
      // console.log(card);
      return card;
    }
    else return null;
  }
}

Deck.prototype.displayDeck = function(){
  console.log(this.deck);
}

function playerconstructor(name, deck){
  //private variable
  //public variable
  this.name = name;
  this.hand = [];
  this.takecard = function() {
    var handcard = deck.deal();
    this.hand.push(handcard);
  }
  this.discard = function(){
    if(this.hand.length > 0){
      this.hand.shift();
    }
  }
}
playerconstructor.prototype.displayhand = function(){
 console.log(this.hand);
}

var newdeck = new Deck();
// newdeck.createdeck();
// newdeck.shuffle();
newdeck.reset();
newdeck.deal();
newdeck.displayDeck();
var player1 = new playerconstructor("Evelyn", newdeck);
var player2 = new playerconstructor("Jesse", newdeck);
player1.takecard();
player2.takecard();
player1.displayhand();
player2.displayhand();
player1.takecard();
player1.displayhand();
player1.discard();
player1.displayhand();
newdeck.displayDeck();
