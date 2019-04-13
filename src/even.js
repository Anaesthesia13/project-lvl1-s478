import readlineSync from 'readline-sync';

import { intRandom } from './index.js';

const x = intRandom(1, 100);
const compare = () => {
  let i = x % 2;
  if (i === 0) {
    return true;
  }
  return false;
};
export const isEven = () => {
  if (compare (x) === true) {
    return 'yes';
  }
  return 'no';
};
export const evenOrNot = () => {
  readLineSynq.question('Your answer: ');
  console.log('Answer "yes" if number even otherwise answer "no".');
};
