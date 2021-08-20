"use strict";
var MovePaket = /** @class */ (function () {
    function MovePaket(player, vector) {
        this.player = player;
        this.vector = vector;
    }
    MovePaket.prototype.toJson = function () {
        return JSON.stringify(this);
    };
    return MovePaket;
}());
