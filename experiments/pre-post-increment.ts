let y = 0;
let x = 0;
y = x++;
console.log(`x: ${x}, y: ${y}`);

y = 0;
x = 0;
y = ++x;
console.log(`x: ${x}, y: ${y}`);

//=============================================

let output = '';
for (let i = 0; i <= 5; i++) {
  output += i;
}
console.log(output);

output = '';
for (let i = 0; i <= 5; ++i) {
  output += i;
}
console.log(output);
