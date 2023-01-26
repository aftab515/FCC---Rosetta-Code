function convertSeconds(sec) {
  const timeUnits = [
    {unit: "wk",  seconds: 604800},
    {unit: "d",   seconds: 86400},
    {unit: "hr",  seconds: 3600},
    {unit: "min", seconds: 60},
    {unit: "sec", seconds: 1},
  ];

  return timeUnits
    .reduce((acc, curr) => {
      const numCurrUnits = Math.floor(acc.seconds / curr.seconds);
      const newSeconds = acc.seconds % curr.seconds;
      const currOutput = "" + numCurrUnits + " " + curr.unit;
      const newOutput = numCurrUnits === 0 ?
        acc.output :
        acc.output === "" ?
          currOutput :
          acc.output + ", " + currOutput;
      return { output: newOutput, seconds: newSeconds };
    },
    { output: "", seconds: sec }
    ).output;
}