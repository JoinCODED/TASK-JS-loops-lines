/**
 * 
 * In this function, you will have to draw a vertical line with `n` length
 * for example `drawVLine(5) should print out 
  # 
  # 
  # 
  # 
  # 
 */
function drawVLine(n) {
  // Continue the code here
  for (let i = 0; i < n; i++) {
    console.log('#');
  }
}
/**
 *
 * In this function, you will have to draw a horizontal line with `n` length
 * for example `drawHLine(5) should print out # # # # # (there are spaces here!)
 */
function drawHLine(n) {
  // Continue the code here
  let result = '';
  for (let i = 0; i < n; i++) {
    result = result + '# ';
  }
  console.log(result);
}

/**
 * 
 * In this function, you will have to draw a square with a length of `n` 
 * for example `drawSquare(5) should print out 
 
  #  #  #  #  # 
  #  #  #  #  # 
  #  #  #  #  # 
  #  #  #  #  # 
  #  #  #  #  # 

 */
function drawSquare(n) {
  // Continue the code here
  let line = ' ';
  for (let i = 0; i < n; i++) {
    line = line + '# ';
  }
  for (let i = 0; i < n; i++) {
    console.log(line);
  }
}

/**
 * 
 * In this function, you will have to draw a triangle with a length of `n` 
 * for example `drawLeftTriangle(5) should print out 
 
  #  
  #  #  
  #  #  #  
  #  #  #  #  
  #  #  #  #  #

 */
function drawLeftTriangle(n) {
  // Continue the code here
  let result = '';
  for (let i = 0; i < n; i++) {
    result = result + '#';
    console.log(result);
  }
}

/**
 * 
 * In this function, you will have to draw a tree with a length of `n` 
 * for example `drawTree(5) should print out 
 
     #   
    # #   
   # # # 
  # # # # 
     #

 */
function drawTree(n) {
  // Continue the code here
}
/**
 *
 * In this example, you will create 4 arrays, `yellowCards`, `greenCards`, `redCards`, `blueCards`
 * (BONUS) Try to optimize the code with doing it with one gigantic loop
 */
function fillUnoDeck() {
  let greenCards = [];
  let yellowCards = [];
  let redCards = [];
  let blueCards = [];
  // Fill the cards here
}

module.exports = {
  drawVLine,
  drawHLine,
  drawSquare,
  drawLeftTriangle,
};
