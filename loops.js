function forLoop(i) {
   for ( let i = 0; i < 25; i++) {
     return (`"I am ${i} strange loop${i === 0 ? '' : 's'}."`)
  }
}

function whileLoop(n) {
  let countdown = n;

    while (countdown > 0) {
      console.log(--countdown)
    }
    return "done";
  }

function doWhileLoop(num) {
