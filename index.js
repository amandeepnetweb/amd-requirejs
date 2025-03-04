require.config({
  paths: {
    math: "scripts/math",
    greeting: "scripts/greeting",
  },
});

require(["greeting"], function (greeting) {
  let message = greeting.sayHello("John", 3, 4);
  console.log(message);
});
