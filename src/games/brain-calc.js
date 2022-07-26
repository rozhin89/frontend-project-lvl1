import launchGame from '../index.js';
import getRandom from '../utils/random.js';

const MIN_OPERAND_VALUE = 0;
const MAX_OPERAND_VALUE = 42;

const add = (leftOperand, rightOperand) => leftOperand + rightOperand;
const subtract = (leftOperand, rightOperand) => leftOperand - rightOperand;
const multiply = (leftOperand, rightOperand) => leftOperand * rightOperand;

const operatorsFunctionsMap = {
  '+': add,
  '-': subtract,
  '*': multiply,
};

const getRandomOperator = (operators) => {
  const randomIndex = getRandom(0, operators.length - 1);
  return operators[randomIndex];
};

const calculateAnswer = (operator, leftOperand, rightOperand) => {
  const calculate = operatorsFunctionsMap[operator];
  return calculate(leftOperand, rightOperand);
};

const generateTask = () => {
  const operator = getRandomOperator(Object.keys(operatorsFunctionsMap));
  const leftOperand = getRandom(MIN_OPERAND_VALUE, MAX_OPERAND_VALUE);
  const rightOperand = getRandom(MIN_OPERAND_VALUE, MAX_OPERAND_VALUE);

  const question = `${leftOperand} ${operator} ${rightOperand}`;
  const answer = calculateAnswer(operator, leftOperand, rightOperand);

  return { question, answer: String(answer) };
};

export default function launch() {
  launchGame(
    'What is the result of the expression?',
    generateTask,
  );
}
