"use strict";
var MovePaket //動きの更新を送信。
 = /** @class */ (function () {
    function MovePaket(player, vector) {
        this.player = player;
        this.vector = vector;
    }
    MovePaket.prototype.toJson = function () {
        return JSON.stringify(this);
    };
    return MovePaket;
}());
var ColorPaket //色の変化を送信。
 = /** @class */ (function () {
    function ColorPaket(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
    }
    ColorPaket.prototype.toJson = function () {
        return JSON.stringify(this);
    };
    return ColorPaket;
}());
