import readlineSync from 'readline-sync';

const IntRandom = (s, f) => Math.floor(Math.random() * (f - s));
export const x = IntRandom (1, 100);
const compare = () => {
	let i = x % 2;
if (i === 0) {
	return true;
}
else {
	return false;
}
};
export const isEven = () => {
if (compare (x) === true) {
	return 'yes';
}
else {
	return 'no';
}
};
export const evenOrNot = () => {
	readLineSynq.question('Your answer: ');
	console.log('Answer "yes" if number even otherwise answer "no".');
};
