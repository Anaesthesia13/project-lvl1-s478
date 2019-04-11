#!/usr/bin/env node
import { knowName } from '..';
import { IntRandom, evenOrNot, isEven } from 'even.js';
console.log ("Welcome to the Brain Games!");

knowName ();

console.log ('Answer "yes" if number even otherwise answer "no".');

const game = () => {
console.log ('Question: ${IntRandom}');
eventOrNot ();
if (isEven(IntRandom) === evenOrNot) {
	console.log ('Correct!');
   console.log ('Question: ${IntRandom}');
   eventOrNot ();
   if (isEven(IntRandom) === evenOrNot) {
	   console.log ('Correct!');
      console.log ('Question: ${IntRandom}');
      eventOrNot ();
      if (isEven(IntRandom) === evenOrNot) {
         console.log ('Correct! \n Congratulations, ${knowName}!');
         };
      };
   }
      else { 
      console.log ("'${evenOrNot}' is a wrong answer ;(. Correct answer was '${isEven(IntRandom)}'! \n Let's try again, ${knowName}")
      };
};
