#!/usr/bin/env node
import launchGame from '../src/index.js';
import getRandomInt from '../src/utils/randomInt.js';

const HIDDEN_CHARS = '..';

const MIN_PROGRESSION_STEP = 1;
const MAX_PROGRESSION_STEP = 5;

const MIN_PROGRESSION_SHIFT = 1;
const MAX_PROGRESSION_SHIFT = 50;

const MIN_PROGRESSION_LENGTH = 5;
const MAX_PROGRESSION_LENGTH = 10;

const generateRandomProgression = () => {
  const result = [];
  const step = getRandomInt(MIN_PROGRESSION_STEP, MAX_PROGRESSION_STEP);
  const minValue = getRandomInt(MIN_PROGRESSION_SHIFT, MAX_PROGRESSION_SHIFT);
  const progressionLength = getRandomInt(MIN_PROGRESSION_LENGTH, MAX_PROGRESSION_LENGTH);

  for (let index = 0; index < progressionLength; index += 1) {
    result.push(minValue + index * step);
  }

  return result;
};

const getRandomProgressionValue = (progression) => {
  const randomIndex = getRandomInt(0, progression.length - 1);
  return progression[randomIndex];
};

const generateQuestion = () => {
  const progression = generateRandomProgression();
  const answer = getRandomProgressionValue(progression);

  const task = progression.join(' ').replace(answer, HIDDEN_CHARS);

  return { task, answer: String(answer) };
};

launchGame(
  'What number is missing in the progression?',
  generateQuestion,
);
