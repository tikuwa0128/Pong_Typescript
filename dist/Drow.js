"use strict";
var Drow = /** @class */ (function () {
    function Drow() {
    }
    Drow.prototype.start_scene = function () {
        Drow.write_text("PONG", 640 - 140, 360 - 60, 100, 255, 255, 255);
        if (intervaltimer >= 100)
            intervaltimer = 0;
        else if (intervaltimer >= 0 && intervaltimer <= 60) {
            Drow.write_text("Please press 'Space.", 640 - 225, 360 + 60 + 60, 60, 255, 255, 255);
            intervaltimer += 1;
        }
        else
            intervaltimer += 1;
    };
    Drow.prototype.game_scene = function () {
        context.fillStyle = "rgb(" + rndm_r + "," + rndm_g + "," + rndm_b + ")";
        box.fill(context);
        context.fillStyle = 'rgb(255,255,255)';
        // context.fillRect(box.location.x,box.location.y,30,30)
        player.fill(context);
        npc.fill(context);
        Drow.write_text(player_score.toString(), 640 - 300, 120, 72, 255, 255, 255);
        Drow.write_text(npc_score.toString(), 640 + 300, 120, 72, 255, 255, 255);
    };
    Drow.prototype.end_scene = function () {
        if (win_flag)
            Drow.write_text("You Win!", 640 - 225, 360 - 50, 100, 255, 255, 255);
        else
            Drow.write_text("You Lose...", 640 - 250, 360 - 50, 100, 255, 255, 255);
        if (intervaltimer >= 100)
            intervaltimer = 0;
        else if (intervaltimer >= 0 && intervaltimer <= 60) {
            Drow.write_text("Please press 'R'.", 640 - 225, 360 + 60 + 60, 60, 255, 255, 255);
            intervaltimer += 1;
        }
        else
            intervaltimer += 1;
    };
    Drow.canvas_clear = function () {
        context.fillStyle = 'rgb(00,00,00)';
        context.fillRect(0, 0, WIDTH, HEIGHT);
    };
    Drow.write_text = function (text, x, y, px, r, g, b) {
        context.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
        context.font = px + "px serif";
        context.transform(1, 0, 0, -1, 0, canvas.height);
        context.fillText(text, x, y);
        context.transform(1, 0, 0, -1, 0, canvas.height);
    };
    Drow.rndm_color = function () {
        rndm_r = Math.floor(Math.random() * 256);
        rndm_g = Math.floor(Math.random() * 256);
        rndm_b = Math.floor(Math.random() * 256);
    };
    return Drow;
}());
