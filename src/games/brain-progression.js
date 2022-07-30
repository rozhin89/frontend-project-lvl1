import launchGame from '../index.js';
import getRandom from '../utils/random.js';

const HIDDEN_CHARS = '..';

const MIN_PROGRESSION_STEP = 1;
const MAX_PROGRESSION_STEP = 5;

const MIN_PROGRESSION_SHIFT = 1;
const MAX_PROGRESSION_SHIFT = 50;

const MIN_PROGRESSION_LENGTH = 5;
const MAX_PROGRESSION_LENGTH = 10;

const generateRandomProgression = (step, minValue, length) => {
  const result = [];

  for (let index = 0; index < length; index += 1) {
    result.push(minValue + index * step);
  }

  return result;
};

const getRoundData = () => {
  const step = getRandom(MIN_PROGRESSION_STEP, MAX_PROGRESSION_STEP);
  const minValue = getRandom(MIN_PROGRESSION_SHIFT, MAX_PROGRESSION_SHIFT);
  const progressionLength = getRandom(MIN_PROGRESSION_LENGTH, MAX_PROGRESSION_LENGTH);

  const progression = generateRandomProgression(
    step,
    minValue,
    progressionLength,
  );

  const randomIndex = getRandom(0, progression.length - 1);
  const answer = progression[randomIndex];

  progression[randomIndex] = HIDDEN_CHARS;
  const question = progression.join(' ');

  return { question, answer: String(answer) };
};

export default function launch() {
  launchGame(
    'What number is missing in the progression?',
    getRoundData,
  );
}
