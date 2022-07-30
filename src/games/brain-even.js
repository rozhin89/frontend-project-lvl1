import launchGame from '../index.js';
import getRandom from '../utils/random.js';

const MIN_RANDOM_VALUE = 1;
const MAX_RANDOM_VALUE = 100;

const NEGATIVE_ANSWER = 'no';
const POSITIVE_ANSWER = 'yes';

const isEven = (value) => value % 2 === 0;

const getRoundData = () => {
  const value = getRandom(MIN_RANDOM_VALUE, MAX_RANDOM_VALUE);
  const answer = isEven(value) ? POSITIVE_ANSWER : NEGATIVE_ANSWER;

  return { question: value, answer };
};

export default function launch() {
  launchGame(
    `Answer "${POSITIVE_ANSWER}" if the number is even, otherwise answer "${NEGATIVE_ANSWER}".`,
    getRoundData,
  );
}
