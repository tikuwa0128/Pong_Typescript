"use strict";
var App = /** @class */ (function () {
    function App(scene) {
        this.drow = new Drow();
        this.update = new Update();
        App.scene = scene;
    }
    App.prototype.change_scene = function (scene) {
        App.scene = scene;
    };
    App.prototype.execution = function (scene) {
        // console.log(scene)
        Drow.canvas_clear();
        switch (scene) {
            case "start":
                this.update.start_scene();
                this.drow.start_scene();
                break;
            case "game":
                this.update.game_scene();
                this.drow.game_scene();
                break;
            case "end":
                this.update.end_scene();
                this.drow.end_scene();
                break;
            default:
                console.log("erro");
                break;
        }
    };
    return App;
}());
