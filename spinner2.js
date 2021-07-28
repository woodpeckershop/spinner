const spin = '|/-\\|/-\\|'
let delay = 100;
for (const each of spin) {
  setTimeout(() => { process.stdout.write('\r' + each + '   '); }, delay);
  delay += 200
}
setTimeout(() => { process.stdout.write('\n'); }, delay);