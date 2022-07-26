import launchGame from '../index.js';
import getRandom from '../utils/random.js';

const MIN_RANDOM_VALUE = 1;
const MAX_RANDOM_VALUE = 500;

const NEGATIVE_ANSWER = 'no';
const POSITIVE_ANSWER = 'yes';

const isPrime = (value) => {
  if (value < 2) {
    return false;
  }

  if (value === 2 || value === 3) {
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

const generateTask = () => {
  const value = getRandom(MIN_RANDOM_VALUE, MAX_RANDOM_VALUE);
  const answer = isPrime(value) ? POSITIVE_ANSWER : NEGATIVE_ANSWER;

  return { question: value, answer };
};

export default function launch() {
  launchGame(
    `Answer "${POSITIVE_ANSWER}" if given number is prime. Otherwise answer "${NEGATIVE_ANSWER}".`,
    generateTask,
  );
}
