import readlineSync from 'readline-sync';

import { knowName, IntRandom } from 'index.js';

const x = IntRandom(1, 100);
const y = IntRandom(1, 100);
const divisor = () => {
  if (x > y) {
    for (let i = y; x % i > 0; i -= 1) {
    return i;
    }
  }
  else if (x < y) {
    for (let i = x; y % i > 0; i -= 1) {
    return i;
    }
  }
  else {
  	 return x;
  	 }
}
