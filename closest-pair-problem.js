const Point = function(x, y) {
  this.x = x;
  this.y = y;
};
Point.prototype.getX = function() {
  return this.x;
};
Point.prototype.getY = function() {
  return this.y;
};

const mergeSort = function mergeSort(points, comp) {
    if(points.length < 2) return points;

    var n = points.length,
        i = 0,
        j = 0,
        leftN = Math.floor(n / 2),
        rightN = leftN;

    var leftPart = mergeSort( points.slice(0, leftN), comp),
        rightPart = mergeSort( points.slice(rightN), comp );

    var sortedPart = [];

    while((i < leftPart.length) && (j < rightPart.length)) {
        if(comp(leftPart[i], rightPart[j]) < 0) {
            sortedPart.push(leftPart[i]);
            i += 1;
        }
        else {
            sortedPart.push(rightPart[j]);
            j += 1;
        }
    }
    while(i < leftPart.length) {
        sortedPart.push(leftPart[i]);
        i += 1;
    }
    while(j < rightPart.length) {
        sortedPart.push(rightPart[j]);
        j += 1;
    }
    return sortedPart;
};

const closestPair = function _closestPair(Px, Py) {
    if(Px.length < 2) return { distance: Infinity, pair: [ new Point(0, 0), new Point(0, 0) ] };
    if(Px.length < 3) {
        //find euclid distance
        var d = Math.sqrt( Math.pow(Math.abs(Px[1].x - Px[0].x), 2) + Math.pow(Math.abs(Px[1].y - Px[0].y), 2) );
        return {
            distance: d,
            pair: [ Px[0], Px[1] ]
        };
    }

    var n = Px.length,
        leftN = Math.floor(n / 2),
        rightN = leftN;

    var Xl = Px.slice(0, leftN),
        Xr = Px.slice(rightN),
        Xm = Xl[leftN - 1],
        Yl = [],
        Yr = [];
    //separate Py
    for(var i = 0; i < Py.length; i += 1) {
        if(Py[i].x <= Xm.x)
            Yl.push(Py[i]);
        else
            Yr.push(Py[i]);
    }

    var dLeft = _closestPair(Xl, Yl),
        dRight = _closestPair(Xr, Yr);

    var minDelta = dLeft.distance,
        closestPair = dLeft.pair;
    if(dLeft.distance > dRight.distance) {
        minDelta = dRight.distance;
        closestPair = dRight.pair;
    }

    //filter points around Xm within delta (minDelta)
    var closeY = [];
    for(i = 0; i < Py.length; i += 1) {
        if(Math.abs(Py[i].x - Xm.x) < minDelta) closeY.push(Py[i]);
    }
    //find min within delta. 8 steps max
    for(i = 0; i < closeY.length; i += 1) {
        for(var j = i + 1; j < Math.min( (i + 8), closeY.length ); j += 1) {
            var d = Math.sqrt( Math.pow(Math.abs(closeY[j].x - closeY[i].x), 2) + Math.pow(Math.abs(closeY[j].y - closeY[i].y), 2) );
            if(d < minDelta) {
                minDelta = d;
                closestPair = [ closeY[i], closeY[j] ]
            }
        }
    }

    return {
        distance: minDelta,
        pair: closestPair.sort((pointA, pointB) => pointA.x - pointB.x)
    };
};

function getClosestPair(points) {
  const sortX = function(a, b) { return (a.x < b.x) ? -1 : ((a.x > b.x) ? 1 : 0); }
  const sortY = function(a, b) { return (a.y < b.y) ? -1 : ((a.y > b.y) ? 1 : 0); }

  const Px = mergeSort(points, sortX);
  const Py = mergeSort(points, sortY);

  return closestPair(Px, Py);
}