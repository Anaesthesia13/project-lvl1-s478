#!/usr/bin/env node
import { knowName, game, response } from '..';

import { divisor, ask } from '../calc.js';

knowName();
ask();
game(divisor, ask, response);