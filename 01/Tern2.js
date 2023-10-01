let a = Math.floor(Math.random() * 20) + 1;
let message = '';

function manyChecks() {
  console.log(`a = ${a}`);
  
  return (
    a > 10 ? 'a is bigger than 10' : 'a is less than or equal to 10 ' + (a === 5 ? 'an example of a special case' : '')) + (a === 15 ? 'but a is not 15' : '')+ (a > 5 ? 'and a is greater than 5' : 'and a is less than or equal to 5 ') + (a % 2 ? ' and a is odd' : ' and a is even ');
}

console.log(manyChecks());


// if (a > 10) {
//   message += 'a is bigger than 10';
// } else {
//   message += 'a is less than or equal to 10 '
//   if (a === 5) {
//     message += 'an example of a special case';
//   } else {
//     message += '';
//   }
// }
// if (a === 15) {
//   message += 'but a is not 15';
// } else {
//   message += '';
// }
// if (a > 5) {
//   message += 'and a is greater than 5';
// } else {
//   message += 'and a is less than or equal to 5 ';
// }
// if (a % 2) {
//   message += ' and a is odd';
// } else {
//   message += ' and a is even ';
// }

switch (a > 10) {
  case true:
    message += 'a is bigger than 10';
    break;
  case false:
    message += 'a is less than or equal to 10 ';
    switch (a === 5) {
      case true:
        message += 'an example of a special case';
        break;
      case false:
        message += '';
        break;
    }
    break;
}

switch(a === 15) {
  case true:
    message += 'but a is not 15';
    break;
  case false:
    message += '';
    break;
}

switch (a > 5) {
  case true:
    message += 'and a is greater than 5';
    break;
  case false:
    message += 'and a is less than or equal to 5 ';
    break;
}

switch (a % 2) {
  case true:
    message += ' and a is odd';
    break;
  case false:
    message += ' and a is even ';
    break;
}

console.log(message);