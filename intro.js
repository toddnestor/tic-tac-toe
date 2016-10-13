'use strict'

class Clock {
  constructor() {
    // 1. Create a Date object.
    // 2. Store the hours, minutes, and seconds.
    // 3. Call printTime.
    // 4. Schedule the tick at 1 second intervals.
    let date = new Date;
    this.seconds = date.getSeconds();
    this.minutes = date.getMinutes();
    this.hours = date.getHours();
    this.printTime();
    setInterval(this._tick.bind(this), 1000);
  }

  printTime() {
    // Format the time in HH:MM:SS
    // Use console.log to print it.
    console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
  }

  _tick() {
    // 1. Increment the time by one second.
    // 2. Call printTime.
    this.seconds++;

    if( this.seconds === 60 ) {
      this.seconds = 0;
      this.minutes++;
    }

    if( this.minutes === 60 ) {
      this.minutes = 0;
      this.hours++;
    }

    if( this.hours === 24 ) {
      this.hours = 0;
    }

    this.printTime();
  }
}

// const clock = new Clock();

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, cb) {

  if (numsLeft === 0) {
    cb(sum);
    reader.close();
  } else {
    reader.question('Give me a number, punk', number => {
      number = parseInt(number);
      sum += number;
      console.log(`The sum is: ${sum}`);
      addNumbers(sum, --numsLeft, cb);
    });
  }
}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
