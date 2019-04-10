#!/usr/bin/env node
console.log ("Welcome to the Brain Games!");
import knowName from '..';
knowName ();

console.log ('Answer "yes" if number even otherwise answer "no".')
import { IntRandom, evenOrNot, isEven } from 'even.js';

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
         console.log ('Correct! \n Congratulations, ${knowName}!')
         };
      };
   };
      else { 
      console.log ("'${evenOrNot}' is a wrong answer ;(. Correct answer was '${isEven(IntRandom)}'! \n Let's try again, ${knowName}")
      };
};
