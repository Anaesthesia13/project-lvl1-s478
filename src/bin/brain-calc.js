#!/usr/bin/env node
import { knowName, game, response } from '..';
import { calcRandom, ask } from '../calc.js';
ask;
game (calcRandom, ask, response);