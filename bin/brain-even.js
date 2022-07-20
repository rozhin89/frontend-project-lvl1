#!/usr/bin/env node
import launchGame from '../src/index.js';
import getRandomInt from '../src/utils/randomInt.js';

const MIN_RANDOM_VALUE = 1;
const MAX_RANDOM_VALUE = 100;

const NEGATIVE_ANSWER = 'no';
const POSITIVE_ANSWER = 'yes';

const isEven = (value) => value % 2 === 0;

const generateQuestion = () => {
  const value = getRandomInt(MIN_RANDOM_VALUE, MAX_RANDOM_VALUE);
  const answer = isEven(value) ? POSITIVE_ANSWER : NEGATIVE_ANSWER;

  return { task: value, answer };
};

launchGame(
  `Answer "${POSITIVE_ANSWER}" if the number is even, otherwise answer "${NEGATIVE_ANSWER}".`,
  generateQuestion,
);
