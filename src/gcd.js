import readlineSync from 'readline-sync';

import { knowName, intRandom } from './index.js';

const x = intRandom(1, 100);
const y = intRandom(1, 100);
const divisor = () => {
  if (x > y) {
    for (let i = y; x % y > 0; i+=1) {
    return i;
    }
  }
  else if (x < y) {
    for (let i = x; y % x > 0; i+=1) {
    return i;
    }
  }
  else {
  	 return x;
  	 }
}
