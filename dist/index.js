"use strict";
//ゲーム設定＊注意！下手に変えるとおかしくなります。
var WIDTH = 1280;
var HEIGHT = 720;
var FPS = 10;
//細かい調整用。
var box_speed = 6;
var player_lodspeed = 4;
var npc_lodspeed = 1.5;
var reflection_angle = Update.rndm_rflection(); //ボールの曲がる角度。
//必要なクラス定義。
var canvas = document.getElementById('pong');
var context = canvas.getContext('2d');
var boxVector = new Vector(Update.direction(true), 0);
var app = new App("start"); //内部処理、シーン管理クラス。
//GameObject
var box = new Box(new Vector(640, 360), 30, 30); //球。
var player = new Box(new Vector(100, 240), 240, 30); //Playerのバー
var npc = new Box(new Vector(1150, 240), 240, 30); //NPCのバー
//ランダムな色を出すためのRGB変数。
Drow.rndm_color(); //ランダムカラー生成
var rndm_r; //
var rndm_g; //
var rndm_b; //
//key
var upFlag = false; //矢印キー上
var downFlag = false; //矢印キー下
var spaceFlag = false; //スペースキー
var rFlag = false; //"R"キー
var shiftFlag = false; //シフトキー
//score
var winpoint = 10;
var player_score = 0;
var npc_score = 0;
var win_flag; //勝利判定
//その他の変数。
var tick = 0;
var intervaltimer = 0;
//ネット系
// const socket:WebSocket = new WebSocket("ws://localhost:5001")
function main() {
    context.transform(1, 0, 0, -1, 0, canvas.height);
    context.fillStyle = 'rgb(00,255,00)';
    document.addEventListener("keydown", keyDownFunc);
    document.addEventListener("keyup", keyUpFunc);
    setInterval(gameLoop, FPS);
}
function gameLoop() {
    tick += 1;
    app.execution(App.scene);
}
function keyDownFunc(event) {
    if (event.keyCode == 32)
        spaceFlag = true;
    if (event.keyCode == 38)
        upFlag = true;
    if (event.keyCode == 40)
        downFlag = true;
    if (event.keyCode == 82)
        rFlag = true;
    if (event.keyCode == 16)
        shiftFlag = true;
}
function keyUpFunc(event) {
    if (event.keyCode == 32)
        spaceFlag = false;
    if (event.keyCode == 38)
        upFlag = false;
    if (event.keyCode == 40)
        downFlag = false;
    if (event.keyCode == 82)
        rFlag = false;
    if (event.keyCode == 16)
        shiftFlag = false;
}
/* メモ
概要：10ポイント先取。
最初：'Space'キーを押したらスタート。NPCから開始。
ゲーム中：
矢印キーで操作。
壁などにボールが当たると色が変わる。
ポイントが入ったら(壁に触れたら。)、ポイントを入れてない方からスタート。
'Sift'キーを押しながらだと反射の上下が反転。
バグったら'R'キーでリスタートプレイヤー側から。
終了
'Rキーでリスタート'

*/ 
