"use strict";
var Vector = /** @class */ (function () {
    function Vector(x, y) {
        this.x = x;
        this.y = y;
    }
    Vector.prototype.add = function (other) {
        return new Vector(this.x + other.x, this.y + other.y);
    };
    Vector.prototype.addRotation = function (amount) {
        var r = Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
        var s = Math.atan2(this.y, this.x) + (amount) * (Math.PI / 180);
        var x = r * Math.cos(s);
        var y = r * Math.sin(s);
        return new Vector(x, y);
    };
    Vector.prototype.setRotation = function (amount) {
        var r = Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
        var s = amount * (Math.PI / 180);
        var x = r * Math.cos(s);
        var y = r * Math.sin(s);
        return new Vector(x, y);
    };
    Vector.prototype.miner = function (other) {
        return new Vector(this.x - other.x, this.y - other.y);
    };
    Vector.prototype.abs = function () {
        return new Vector(Math.abs(this.x), Math.abs(this.y));
    };
    return Vector;
}());
