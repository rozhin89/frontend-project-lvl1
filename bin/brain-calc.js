#!/usr/bin/env node
import launchGame from '../src/index.js';
import getRandomInt from '../src/utils/randomInt.js';

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

const getRandomOperand = () => getRandomInt(MIN_OPERAND_VALUE, MAX_OPERAND_VALUE);

const getRandomOperator = () => {
  const operators = Object.keys(operatorsFunctionsMap);
  const randomIndex = getRandomInt(0, operators.length - 1);

  return operators[randomIndex];
};

const calculateAnswer = (operator, leftOperand, rightOperand) => {
  const calculate = operatorsFunctionsMap[operator];

  return calculate(leftOperand, rightOperand);
};

const generateQuestion = () => {
  const operator = getRandomOperator();
  const leftOperand = getRandomOperand();
  const rightOperand = getRandomOperand();

  const task = `${leftOperand} ${operator} ${rightOperand}`;
  const answer = calculateAnswer(operator, leftOperand, rightOperand);

  return { task, answer: String(answer) };
};

launchGame(
  'What is the result of the expression?',
  generateQuestion,
);
