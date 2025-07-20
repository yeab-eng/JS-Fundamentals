const arg = process.argv[2];
const num = parseInt(arg, 10);

if (Number.isNaN(num)) {
  console.log("Not a number");
} else {
  console.log(`My number: ${num}`);
}
