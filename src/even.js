import readlineSync from 'readline-sync';

import { IntRandom } from './index';

const x = IntRandom(1, 100);
const compare = () => {
  let i = x % 2;
  if (i === 0) {
    return true;
  }
  return false;
};
export const isEven = (x) => {
  if (compare (x) === true) {
    return 'yes';
  }
  return 'no';
};
export const evenOrNot = () => {
  readLineSynq.question('Your answer: ');
};
