function jaro(s1, s2) {
  if (s1.length === 0 && s2.length === 0)
    return 1;

  // Count character matches and transpositions
  let matchDistance = Math.floor(Math.max(s1.length, s2.length)/2) - 1;
  let numMatches = 0, numTranspositions = 0;
  const s1Matches = [], s2Matches = [];
  for (let i = 0; i < s1.length; i++) {
    const start = Math.max(0, i - matchDistance);
    const end = Math.min(i + matchDistance + 1, s2.length);
    // Count matches
    for (let j = start; j < end; j++) {
      if (s2Matches[j] || s1.charAt(i) !== s2.charAt(j))
        continue;
      s1Matches[i] = true;
      s2Matches[j] = true;
      numMatches++;
      break;
    }
  }
  if (numMatches === 0)
    return 0;

  // Count transpositions
  for (let i = 0, k = 0; i < s1.length; i++) {
    if (!s1Matches[i])
      continue;
    while (!s2Matches[k])
      k++;
    if (s1.charAt(i) !== s2.charAt(k))
      numTranspositions++;
    k++;
  }

  // Final result from formula
  console.log(numMatches, numTranspositions)
  return (numMatches/s1.length + numMatches/s2.length +
          (numMatches - numTranspositions/2)/numMatches)/3;
};