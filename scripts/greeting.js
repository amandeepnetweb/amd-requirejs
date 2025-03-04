define(['math'], function(math) {
  return {
      sayHello: function(name, num1, num2) {
          let sum = math.add(num1, num2);
          return `Hello, ${name}! The sum of ${num1} and ${num2} is ${sum}.`;
      }
  };
});
