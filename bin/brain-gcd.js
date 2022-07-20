#!/usr/bin/env node
import launchGame from '../src/index.js';
import getRandomInt from '../src/utils/randomInt.js';

const MIN_OPERAND_VALUE = 1;
const MAX_OPERAND_VALUE = 42;

const getRandomValue = () => getRandomInt(MIN_OPERAND_VALUE, MAX_OPERAND_VALUE);

const calculateGcd = (firstValue, secondValue) => {
  if (firstValue === secondValue) {
    return firstValue;
  }

  const biggerValue = firstValue > secondValue ? firstValue : secondValue;
  const smallerValue = firstValue + secondValue - biggerValue;

  const remainder = biggerValue % smallerValue;

  return remainder === 0
    ? smallerValue
    : calculateGcd(smallerValue, remainder);
};

const generateQuestion = () => {
  const firstValue = getRandomValue();
  const secondValue = getRandomValue();

  const task = `${firstValue} ${secondValue}`;
  const answer = calculateGcd(firstValue, secondValue);

  return { task, answer: String(answer) };
};

launchGame(
  'Find the greatest common divisor of given numbers.',
  generateQuestion,
);
