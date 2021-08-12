"use strict";
var Box = /** @class */ (function () {
    function Box(loc, top, end) {
        this.location = loc;
        this.top = top;
        this.end = end;
    }
    Box.prototype.fill = function (context) {
        context.fillRect(this.location.x, this.location.y, this.end, this.top);
    };
    Box.prototype.getCenter = function () {
        return this.location.add(new Vector(this.end / 2, this.top / 2));
    };
    Box.prototype.isAttatch = function (other) {
        var centerDirection = this.getCenter().miner(other.getCenter()).abs();
        var xySum = new Vector((this.end / 2) + (other.end / 2), (this.top / 2) + (other.top / 2));
        return ((centerDirection.x <= xySum.x) && (centerDirection.y <= xySum.y));
    };
    return Box;
}());
