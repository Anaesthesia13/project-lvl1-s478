#!/usr/bin/env node
import { knowName } from './index.js';

knowName();
const intRandom = (s, f) => Math.floor(Math.random() * (f - s));
const x = intRandom(1, 100);
const y = intRandom(1, 100);
const operand = ['+', '-', '*'];
const sign = Math.random() * operand.length;
const z = operand[sign];
export const ask = (x, y, z) => console.log('Question: ${x} ${z} ${y}');
export const calcRandom = (x, y, z) => (x + z + y);
