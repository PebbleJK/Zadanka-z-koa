import chalk from 'chalk';

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(chalk.rgb(117, 0, 177)(i));
      continue;
    }
    if (i % 3 === 0 ){
      console.log(chalk.red(i));
      continue;
    }
    if (i % 5 === 0) {
      console.log(chalk.blue(i));
      continue;
    }
      console.log(chalk.white(i));
}