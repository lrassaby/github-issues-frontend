var utility = require('../js/utility');

function test1() {
  return (utility.linkGHHandles('@name') == '<a href="https://github.com/name">@name</a>');
}
function test2() {
  return (utility.linkGHHandles('Hello @name') == 'Hello <a href="https://github.com/name">@name</a>');
}
function test3() {
  return (utility.makeBlurb('Hello world', 5) == "Hello");
}
function test4() {
  return (utility.makeBlurb('Hello world', 15) == "Hello world");
}

tests = [test1, test2, test3, test4];

for (var i in tests) {
  if (!test[i]) {
    console.error("Failed test " + i);
  } else {
    console.log("Passed test " + i);
  }
}
