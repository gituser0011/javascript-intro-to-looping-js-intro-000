function forLoop(array) {
   for ( let i = 0; i < 25; i++) {
     if (i === 1) {
      return array.push(`I am ${i} strange loop.`)
     } else {
      return array.push(`I am ${i} strange loops.`)
     }
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
