function arrToObj(keys, vals) {
  let hash = {};
  for (let i = 0; i < keys.length; i++) {
    hash[keys[i]] = vals[i];
  }
  return hash;
}