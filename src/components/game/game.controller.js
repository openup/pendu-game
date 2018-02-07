export default class GameController {
  constructor($log) {
    'ngInject';

    this.$log = $log;
  }

  $onInit = () => {
    this.letters = [];
    this.word = ''; 
    this.wordLength =0;
    this.count = 0;
    this.maxEssai = 0;
    this.fail = false;
    this.guessed = false;
    this.showletters = true;
    this.loadGame();
  };
  

  loadGame = function(){
    this.showletters = true;
    this.letters = this.makeLetters("abcdefghijklmnopqrstuvwxyz");
    this.word = this.generateRandomWord();
    this.wordLength = this.word.length;
    this.count = 0;
    this.maxEssai = this.wordLength + 2;
    this.fail = false;
    this.guessed = false;
  }

  makeLetters = function (word) {
    return word.split('').map(function (l) {
      return { l: l, clicked: false };
    });
  };

  LetterClicked = function (l) {
    l.clicked = true;

    if (this.isWordGuessed() == true) {
      this.guessed = true;
      this.showletters = false;
    }
    else {
      this.count++;
      if (this.count == this.maxEssai) {
        this.fail = true;
        this.showletters = false;
      }
    }
  }

  generateRandomWord = function () {
    var words = ['angular', 'symfony', 'php', 'web', 'javascript',
      'cakephp', 'framework', 'developement', 'github',
      'gitlab', 'applications', 'programmation', 'conception'];
    var random = Math.round(Math.random() * words.length - 1);
    return words[random];
  }

  isWordGuessed() {
    var selectedLetters = this.letters.filter(e => e.clicked == true);
    var stat = 0;
    this.word.split('').forEach((letter) => {
      var index = selectedLetters.find(el => el.l == letter);
      if (index === undefined) {
        stat++;
      }
    });


    return stat ? false : true;

  }
}
