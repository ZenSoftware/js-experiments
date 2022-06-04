// function canConstruct(target: string, wordBank: string[]) {

// }

console.log(canConstruct('shabadaba', ['da', 'sha', 'ba']));
console.log(canConstruct('shabadaba', ['ku', 'da', 'sha', 'ba']));
console.log(canConstruct('shabadaba', ['ku', 'da', 'sha', '', 'ba']));
console.log(canConstruct('shabadaba', ['ku', 'sha', 'ba']));
console.log(canConstruct('shabadaba', ['ku', 'da', 'ba']));
console.log(canConstruct('shabadaba', ['ku', 'sha', 'ba']));
console.log(canConstruct('shabadaba', []));

function canConstruct(target: string, wordBank: string[]) {
  let accum = '';

  wordBank = wordBank.filter(w => w !== '');

  while (accum.length < target.length) {
    let added = false;
    for (let word of wordBank) {
      if (target.startsWith(accum + word)) {
        accum += word;
        added = true;
        break;
      }
    }

    if (!added) return false;
  }
  return true;
}
