function letterFrequency(txt) {
  var cs = txt.split(''),
    i = cs.length,
    dct =  {},
    c = '',
    keys;

  while (i--) {
    c = cs[i];
    dct[c] = (dct[c] || 0) + 1;
  }

  keys = Object.keys(dct);
  keys.sort();
  return keys.map(function (c) { return [c, dct[c]]; });
}