var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', function (jsonline) {
  try {
    var json = JSON.parse(jsonline);
  } catch(ex) {
    console.error("It wasn't possible parse line to JSON: "+jsonline);
  }
});