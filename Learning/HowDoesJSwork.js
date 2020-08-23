// HOW does Javascript Work?
// Async vs Sync? JS is a single-threaded language that can be non-blocking?!

// What IS a program?
// Must be able to do simple things like: allocate memory, parse and execute code.

// The Javascript Engine: V8
// Consists of two part:
// Memory Heap:
// Where the memory allocation magic happens.
// const a = 1;
//
// Plausible Issue: Memory Leak, memory is/may be limited!
// Be wise about how you use your all your variables, especially any global scope variables, these don't automagically unassign themselves.
//
// Call Stack:
// Where your code actually lives.
// console.log('1'); => goes into stack, gets executed, removes it
// console.log('2'); => goes into stack, gets executed, removes it
// console.log('3'); => goes into stack, gets executed, removes it
//
// const one = () => {
//  const two = () => {
//    console.log('4');
//  }
// }
//      console.log('4'); // gets put here third, executes it, gets removed first
//      two() // gets put here second, gets removed second after console.log();
//      one() // gets put here first, gets removed last after two()
//      ////CALL STACK//// === First in, last out ===
//
//  This is basically what synchronous programming is. One doesn't finish before the other has.
//

// Small bit of asynchronous programming

console.log('1');
setTimeout(() => {
  console.log('2');
}, 2000)
console.log('3');

// For async, what's required is a JRE = Javascript Run-Time Environment
// New inclusions are: a web api, a callback queue and an event loop! No worries, all included with the browser (usually)
