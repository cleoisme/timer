let args = process.argv;
let arr = args.slice(2, args.length);

for (const e of arr) {
  setTimeout(
    () => {
      process.stdout.write('\x07');
    }, e * 100);
    
}