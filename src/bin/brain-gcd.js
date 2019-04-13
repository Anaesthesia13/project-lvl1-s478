#!/usr/bin/env node
import { knowName, game, response } from '..';

import { divisor, ask } from '../gcd';

console.log('Welcome to the Brain Games! \n Find the greatest common divisor of given numbers.');
knowName();
ask();
game(divisor, ask, response);