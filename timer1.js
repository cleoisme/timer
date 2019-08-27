let args = process.argv;
console.log(args);
let arr = args.slice(2, args.length);
console.log(arr);

for (const e of arr) {
  setTimeout(
    () => {
      process.stdout.write('\x07');
    }, e * 100);
    
}