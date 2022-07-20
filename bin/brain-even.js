#!/usr/bin/env node
import readlineSync from 'readline-sync';

import greet from '../src/cli.js';

const QUESTIONS_COUNT = 3;
const MIN_RANDOM_VALUE = 1;
const MAX_RANDOM_VALUE = 100;

const NEGATIVE_ANSWER = 'no';
const POSITIVE_ANSWER = 'yes';

function getRandomInt(min, max) {
  return Math.round(min + Math.random() * max);
}

function isEven(value) {
  return value % 2 === 0;
}

function generateQuestion() {
  const value = getRandomInt(MIN_RANDOM_VALUE, MAX_RANDOM_VALUE);
  const answer = isEven(value) ? POSITIVE_ANSWER : NEGATIVE_ANSWER;

  return { value, answer };
}

function startGame() {
  console.log(`Answer "${POSITIVE_ANSWER}" if the number is even, otherwise answer "${NEGATIVE_ANSWER}".`);

  for (let step = 0; step < QUESTIONS_COUNT; step += 1) {
    const question = generateQuestion();

    console.log(`Question: ${question.value}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (question.answer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${question.answer}'.`);
      return false;
    }

    console.log('Correct!');
  }

  return true;
}

(function init() {
  const name = greet();
  const gameResult = startGame();

  const finishMessage = gameResult
    ? `Congratulations, ${name}!`
    : `Let's try again, ${name}!`;

  console.log(finishMessage);
}());
