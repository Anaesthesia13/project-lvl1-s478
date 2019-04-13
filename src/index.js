import readlineSync from 'readline-sync';
export const knowName = () => {
	console.log ("Welcome to the Brain Games!");
	readlineSynq.question ('May I have your name? ');
console.log ('Hello, ${knowName}!');
};

export const response = readlineSynq.question ('Your answer: ');

export const game = (log, ask, answer) => {
console.log ('Question: ${ask}');
if (log !== answer) {
console.log ("'${answer}' is a wrong answer ;(. Correct answer was '${log}'! \n Let's try again, ${knowName}");
      }
      else {
for (let i=1; ask === answer, i<=3; i++) {
	console.log ('Correct!');
	console.log ('Question: ${ask}');
};
return console.log ('Congratulation, ${knowName}!');
};
};
