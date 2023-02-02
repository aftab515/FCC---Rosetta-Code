function knapsack(items, maxweight) {
    var _ = {
        max: function (e) {
            var mx = e[0];
            e.forEach(function (f) {
                if (mx < f)
                    mx = f;
            })
            return mx;
        },
        map: function (array, func) {
            return array.map(func)
        },
        isUndefined: function (a) {
            if (a) {
                return false;
            }
            return true;
        },
        range: function (start, end, step) {
            var a = []
            var f = f = (i, end) => i < end
            if (start > end)
                f = (i, end) => i > end
            for (var i = start; f(i, end); i += step)
                a.push(i)
            return a
        }
    }
    var valuefn = (e) => e.value
    var weightfn = (e) => e.weight
    var _epsilon = 0.01;
    var _p = _.max(_.map(items, valuefn));
    var _k = _epsilon * _p / items.length;
    var _memo = (function () {
        var _mem = {};
        var _key = function (i, w) {
            return i + '::' + w;
        };
        return {
            get: function (i, w) {
                return _mem[_key(i, w)];
            },
            put: function (i, w, r) {
                _mem[_key(i, w)] = r;
                return r;
            }
        };
    })();
    var _m = function (i, w) {
        i = Math.round(i);
        w = Math.round(w);
        if (i < 0 || w === 0) {
            // empty base case
            return { items: [], totalWeight: 0, totalValue: 0 };
        }
        var mm = _memo.get(i, w);
        if (!_.isUndefined(mm)) {
            return mm;
        }
        var item = items[i];
        if (weightfn(item) > w) {
            //item does not fit, try the next item
            return _memo.put(i, w, _m(i - 1, w));
        }
        // this item could fit.
        // are we better off excluding it?
        var excluded = _m(i - 1, w);
        // or including it?
        var included = _m(i - 1, w - weightfn(item));
        if (included.totalValue + Math.floor(valuefn(item) / _k) > excluded.totalValue) {
            // better off including it
            // make a copy of the list
            var i1 = included.items.slice();
            i1.push(item);
            return _memo.put(i, w,
                {
                    items: i1,
                    totalWeight: included.totalWeight + weightfn(item),
                    totalValue: included.totalValue + Math.floor(valuefn(item) / _k)
                });
        }
        //better off excluding it
        return _memo.put(i, w, excluded);
    };
    var scaled = _m(items.length - 1, maxweight);
    var val = 0;
    scaled.items.forEach(function (e) {
        val += e.value
    })
    return val;
}