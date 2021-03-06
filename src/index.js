import readlineSync from 'readline-sync';

export const IntRandom = (s, f) => Math.floor(Math.random() * (f - s));
export const knowName = () => {
  readlineSynq.question('May I have your name? ');
  console.log('Hello, ${knowName}!');
};
export const response = readlineSynq.question('Your answer: ');
export const game = (log, ask, answer) => {
  console.log('Question: ${ask}');
  if (log !== answer) {
    console.log("'${answer}' is a wrong answer ;(. Correct answer was '${log}'! \n Let's try again, ${knowName}");
  }
  else {
    for (let i = 1; ask === answer && i <= 3; i += 1) {
      console.log('Correct!');
      console.log('Question: ${ask}');
    }
    return console.log('Congratulation, ${knowName}!');
  }
};
