#!/usr/bin/env node
import { knowName, game, response } from '..';

import { calcRandom, ask } from '../calc';

console.log('Welcome to the Brain Games! \n What is the result of the expression?');
knowName();
ask();
game(calcRandom, ask, response);
