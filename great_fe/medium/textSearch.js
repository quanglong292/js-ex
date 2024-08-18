function textSearch(text, query) {
  const arr = text.split("");
  for (let i = 0; i < arr.length; i++) {
    let marking = [];
    let matchChars = "";

    if (query.length === 1) {
      for (let j = i; j < arr.length; j++) {
        const char = arr[j];
        const q = query;

        if (q?.toLowerCase() === char?.toLowerCase()) {
          marking.push(j);
          matchChars += char;
        } else {
          i = j;
          const firstIndex = marking[0];
          const lastIndex = marking.at(-1);
          arr[firstIndex] = `<b>${arr[firstIndex]}`;
          arr[lastIndex] = `${arr[lastIndex]}</b>`;

          marking = [];
          matchChars = "";
          break;
        }
      }
    } else {
      for (let j = 0; j < query.length; j++) {
        const char = arr[i + j];
        const q = query[j];

        if (q?.toLowerCase() === char?.toLowerCase()) {
          marking.push(i + j);
          matchChars += char;
        } else break;
      }
    }

    if (matchChars.toLowerCase() === query.toLowerCase()) {
      const firstIndex = marking[0];
      const lastIndex = marking.at(-1);
      arr[firstIndex] = `<b>${arr[firstIndex]}`;
      arr[lastIndex] = `${arr[lastIndex]}</b>`;

      marking = [];
      matchChars = "";
    }
  }

  return arr.join("");
}

// console.log(textSearch("The Quick Brown Fox Jumps Over The Lazy Dog", "fox"));
// 'The Quick Brown <b>Fox</b> Jumps Over The Lazy Dog'
// console.log(textSearch("The hardworking Dog overtakes the lazy dog", "dog"));
// 'The hardworking <b>Dog</b> overtakes the lazy <b>dog</b>'

// console.log(textSearch("aaa", "aa"));
// '<b>aa</b>a'
// This is because the second character cannot be used as a match again.

// console.log(textSearch("aabbcc", "a"));
console.log(textSearch('aabbbbcc', 'bb'));
