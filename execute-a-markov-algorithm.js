function markov(rules,data) {
    let pattern = new RegExp("^([^#]*?)\\s+->\\s+(\\.?)(.*)");
    let origData = data;

    let captures = [];

    rules.forEach(function(rule){
        let m = pattern.exec(rule);
        for (let j = 0; j < m.length; j++)
            m[j] = m[j + 1];
        captures.push(m);
    });

    data = origData;
    let copy = data;
    for (let j = 0; j < captures.length; j++) {
        let c = captures[j];
        data = data.replace(c[0], c[2]);
        if (c[1]==".")
            break;
        if (data!=copy) {
            j = -1;
            copy = data;
        }
    }
    return data;
}