#!/usr/bin/env node
import launchGame from '../src/index.js';
import getRandomInt from '../src/utils/randomInt.js';

const MIN_RANDOM_VALUE = 1;
const MAX_RANDOM_VALUE = 500;

const NEGATIVE_ANSWER = 'no';
const POSITIVE_ANSWER = 'yes';

const isPrime = (value) => {
  if (value < 4) {
    return true;
  }

  if (value % 2 === 0) {
    return false;
  }

  const maxDivider = Math.sqrt(value);

  for (let divider = 3; divider <= maxDivider; divider += 1) {
    const remainder = value % divider;

    if (remainder === 0) {
      return false;
    }
  }

  return true;
};

const generateQuestion = () => {
  const value = getRandomInt(MIN_RANDOM_VALUE, MAX_RANDOM_VALUE);
  const answer = isPrime(value) ? POSITIVE_ANSWER : NEGATIVE_ANSWER;

  return { task: value, answer };
};

launchGame(
  `Answer "${POSITIVE_ANSWER}" if given number is prime. Otherwise answer "${NEGATIVE_ANSWER}".`,
  generateQuestion,
);
