import readlineSync from 'readline-sync';

import greet from './cli.js';

const QUESTIONS_COUNT = 3;

const launchGameCycle = (generateQuestion) => {
  for (let step = 0; step < QUESTIONS_COUNT; step += 1) {
    const question = generateQuestion();

    console.log(`Question: ${question.task}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (question.answer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${question.answer}'.`);
      return false;
    }

    console.log('Correct!');
  }

  return true;
};

export default function launchGame(rules, generateQuestion) {
  const name = greet();
  console.log(rules);

  const gameResult = launchGameCycle(generateQuestion);

  const finishMessage = gameResult
    ? `Congratulations, ${name}!`
    : `Let's try again, ${name}!`;

  console.log(finishMessage);
}
