const line = function(n,achar, bchar) {
  if (n <= 0) {
    return "";
  }
  return achar + bchar + line(n - 1, achar, bchar);
};

const board = function(n, length) {
  if (n <= 0) {
    return ""; 
  } else if (n === 1) {
    console.log(line(length, '*', ' '));
  } else {
  console.log(line(length, '*', ' '));
  console.log(line(length, ' ', '*'));
  return board(n-2, length);
  }
};

const checkerboard = function(n) {
  board(n, n);
};



const print = function(num, symbol) {
  if(num <= 0){
    return "";
  } 
  return symbol + print(num - 1, symbol);
};

const typeOfLine = function(spaceNumber, starNumber) {
  if (starNumber <= 0){
    return "";
  }
  console.log(print(spaceNumber, " ") + print(starNumber, "*"));
  return typeOfLine(spaceNumber + 1, starNumber - 2);
};

const triangleStars = function(n) {
  typeOfLine(0, 2*n-1);
};



const pow = function(base, n) {
  if (n === 0) {
    return 1;
  } else if (n === 1) {
    return base
  }
  
  return base * pow(base, n-1);
};


const reversetool = function(str, index) {
  if (index < 0) {
    return "";
  }
  
  return str[index] + reversetool(str, index - 1);
};

const reverse = function(str) {
  return reversetool(str, str.length-1);
};