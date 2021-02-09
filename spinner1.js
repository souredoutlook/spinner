//spinner1.js

const spinner1 = function(maxCycles){
  let time = 100;
  let frames = ['|','/','-','\\',]
  let currentCycle = 0;
  while (currentCycle < maxCycles){
    for (const frame of frames){
      setTimeout(()=>process.stdout.write(`\r${frame}     `),time);
      time += 200;
    } 
    currentCycle += 1;
  }
  time += 200;
  setTimeout(()=>process.stdout.write(`\r${frames[0]}     \n`),time);
}