import gameComponent from './game.component';
import './game.component.scss';

const gameModule = angular.module('app.game', []);

gameModule.filter('hideWrong', function(){
   return function(word, arr){
   	 var str = '';
     var clickedLetters = arr.filter(e => e.clicked == true);

     word.split('').forEach((e) => {
       str+=  clickedLetters.find(el => el.l == e) ? e : '_';
     });
     return str;
   };
});

// loading components, services, directives, specific to this module.
gameModule.component('game', gameComponent);

// export this module
export default gameModule;
