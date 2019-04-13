#!/usr/bin/env node
import { IntRandom } from './index.js';

const x = () => IntRandom(1, 100);
const y = () => IntRandom(1, 100);
const operand = ['+', '-', '*'];
const sign = Math.random() * operand.length;
const z = () => operand[sign];
export const ask = () => console.log('Question: ${x} ${z} ${y}');
export const calcRandom = (x, y, z) => (x + z + y);
