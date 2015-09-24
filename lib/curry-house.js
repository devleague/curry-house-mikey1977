var curry = require('./curry');

function calculate(num1) {
  return function(op) {
    if (op ==="+" || op === "add") {
      return function(num2) {
        return num1 + num2;
      }
    }
    if (op === "-" || op === "subtract") {
      return function(num2) {
        return num1 - num2;
      }
    }
    if (op === "*" || op === "multiply") {
      return function(num2) {
        return num1 * num2;
      }
    }
    if (op === "/" || op === "divide") {
      return function(num2) {
        return num1 / num2;
      }
    }
    if (op === "%" || op === "modulo") {
      return function(num2) {
        return num1%num2;
      }
    }
    if (op === "^" || op === "power of") {
      return function(num2) {
        return Math.pow(num1,num2);
      }
    }
  }
}


function random(start) {
  return {
    to: function(end) {
      return Math.floor((Math.random() * (end - start)) + start);
    }

  }
  return {
    toInclude: function(end) {
      return Math.floor((Math.random() * ((end + 1) - start)) + start);
    }
  }

}

function concat(arg1, arg2) {
  return arg1 + arg2;

}

var prependGreeting = curry(concat, "Hello ");



function add (x, y, z) {
  return x + y + z;
}

var add4and5 = curry(add, 4, 5);

function calculator(operation){
  return function (op2, op1) {
    if (operation === "+" || operation === "add") {
      return op2 + op1;
    }
    if (operation === "-" || operation === "subtract") {
      return op1 - op2;
    }
    if (operation === "*" || operation === "multiply") {
      return op1 * op2;
    }
    if (operation === "/" || operation === "divide") {
      return op1 / op2
    }
    if (operation === "%" || operation === "modulo") {
      return op1 % op2;
    }
    if (operation === "^" || operation === "power of") {
      return Math.pow(op1, op2);
    }
}
}
var add5 = curry(calculator("+"), 5);
var sub5 = curry(calculator("-"), 5);
var multiply5 = curry(calculator("*"), 5);
var divide5 = curry(calculator("/"), 5);
var mod5 = curry(calculator("%"), 5);
var pow3 = curry(calculator("^"), 3);

module.exports = {
  calculate : calculate,
  random : random,
  prependGreeting : prependGreeting,
  add4and5 : add4and5,
  calculator : calculator,
  add5 : add5,
  sub5 : sub5,
  multiply5 : multiply5,
  divide5 : divide5,
  mod5 : mod5,
  pow3 : pow3
};