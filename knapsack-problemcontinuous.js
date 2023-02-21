function knapContinuous(items, maxweight) {
  function item_cmp(a, b) {
    const ua = a.unitVal, ub = b.unitVal;
    return ua < ub ? 1 : ua > ub ? -1 : 0;
  }
  items = items.map(({ value, weight }) => ({ unitVal: value / weight, weight }));
  items.sort(item_cmp)
  let val = 0;
  let wt = 0;
  for (let { unitVal, weight } of items) {
    var portion = Math.min(maxweight - wt, weight);
    wt += portion;
    var addVal = portion * unitVal;
    val += addVal;
    if (wt >= maxweight) {
      break;
    }
  }
  return val;
}