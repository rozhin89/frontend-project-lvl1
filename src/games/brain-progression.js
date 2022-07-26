import launchGame from '../index.js';
import getRandom from '../utils/random.js';

const HIDDEN_CHARS = '..';

const MIN_PROGRESSION_STEP = 1;
const MAX_PROGRESSION_STEP = 5;

const MIN_PROGRESSION_SHIFT = 1;
const MAX_PROGRESSION_SHIFT = 50;

const MIN_PROGRESSION_LENGTH = 5;
const MAX_PROGRESSION_LENGTH = 10;

const generateRandomProgression = (minStep, maxStep, minShift, maxShift, minLength, maxLength) => {
  const result = [];
  const step = getRandom(minStep, maxStep);
  const minValue = getRandom(minShift, maxShift);
  const progressionLength = getRandom(minLength, maxLength);

  for (let index = 0; index < progressionLength; index += 1) {
    result.push(minValue + index * step);
  }

  return result;
};

const generateTask = () => {
  const progression = generateRandomProgression(
    MIN_PROGRESSION_STEP,
    MAX_PROGRESSION_STEP,
    MIN_PROGRESSION_SHIFT,
    MAX_PROGRESSION_SHIFT,
    MIN_PROGRESSION_LENGTH,
    MAX_PROGRESSION_LENGTH,
  );

  const randomIndex = getRandom(0, progression.length - 1);
  const answer = progression[randomIndex];

  const question = progression.join(' ').replace(answer, HIDDEN_CHARS);

  return { question, answer: String(answer) };
};

export default function launch() {
  launchGame(
    'What number is missing in the progression?',
    generateTask,
  );
}
