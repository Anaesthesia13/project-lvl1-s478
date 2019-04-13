import { IntRandom } from './index';

const x = IntRandom(1, 100);
const y = IntRandom(1, 100);
export const divisor = () => {
  if (x > y) {
    for (let i = y; x % i > 0 || y % i > 0; i -= 1) {
      return i;
    }
  }
  else if (x < y) {
    for (let i = x; x % i > 0 || y % i > 0; i -= 1) {
      return i;
    }
  }
  else {
  	 return x;
  	 }
}
export const ask = () => console.log('Question: ${x} ${y}');
