function canMakeWord(word) {
  const blocksArr = [
    ["B", "O"], ["X", "K"], ["D", "Q"], ["C", "P"], ["N", "A"],
    ["G", "T"], ["R", "E"], ["T", "G"], ["Q", "D"], ["F", "S"],
    ["J", "W"], ["H", "U"], ["V", "I"], ["A", "N"], ["O", "B"],
    ["E", "R"], ["F", "S"], ["L", "Y"], ["P", "C"], ["Z", "M"],
  ];
  word = word.toUpperCase().split("");

  for (let letter in word) {
    // Check if any block contains letter
    const blockIndex = blocksArr.findIndex(
      (block) => block.indexOf(word[letter]) >= 0
    );
    if (blockIndex == -1) {
      // Return false if no blocks contains letter
      return false;
    } else {
      // Otherwise, remove the block
      blocksArr.splice(blockIndex, 1);
    }
  }
  return true;
}