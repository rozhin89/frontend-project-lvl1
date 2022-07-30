import launchGame from '../index.js';
import getRandom from '../utils/random.js';

const MIN_OPERAND_VALUE = 1;
const MAX_OPERAND_VALUE = 42;

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

const getRoundData = () => {
  const firstValue = getRandom(MIN_OPERAND_VALUE, MAX_OPERAND_VALUE);
  const secondValue = getRandom(MIN_OPERAND_VALUE, MAX_OPERAND_VALUE);

  const question = `${firstValue} ${secondValue}`;
  const answer = calculateGcd(firstValue, secondValue);

  return { question, answer: String(answer) };
};

export default function launch() {
  launchGame(
    'Find the greatest common divisor of given numbers.',
    getRoundData,
  );
}
