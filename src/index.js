import readlineSync from 'readline-sync';

const QUESTIONS_COUNT = 3;

export default (rules, getRoundData) => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!`);
  console.log(rules);

  for (let step = 0; step < QUESTIONS_COUNT; step += 1) {
    const roundData = getRoundData();

    console.log(`Question: ${roundData.question}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (roundData.answer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${roundData.answer}'.`);
      return console.log(`Let's try again, ${name}!`);
    }

    console.log('Correct!');
  }

  return console.log(`Congratulations, ${name}!`);
};
