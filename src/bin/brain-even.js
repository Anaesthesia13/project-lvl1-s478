#!/usr/bin/env node
import { knowName, game } from '..';
import { IntRandom, evenOrNot, isEven } from '../even.js';

knowName ();

game (IntRandom, evenOrNot);

