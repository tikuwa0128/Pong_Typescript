//ゲーム設定＊注意！下手に変えるとおかしくなります。
const WIDTH:number                             = 1280
const HEIGHT:number                            = 720
const FPS:number                               = 10
//細かい調整用。
let box_speed:number                           = 6
let player_lodspeed:number                     = 4
let npc_lodspeed:number                        = 1.5
let reflection_angle:number                    = Update.rndm_rflection()  //ボールの曲がる角度。
//必要なクラス定義。
let canvas:HTMLCanvasElement                   = document.getElementById('pong') as HTMLCanvasElement
let context:CanvasRenderingContext2D           = canvas.getContext('2d')!!
let boxVector:Vector                           = new Vector(Update.direction(true),0)
let app:App                                    = new App("start")//内部処理、シーン管理クラス。
//GameObject
let box:Box                                    = new Box(new Vector(640,360),30,30) //球。
let player:Box                                 = new Box(new Vector(100,240),240,30) //Playerのバー
let npc:Box                                    = new Box(new Vector(1150,240),240,30) //NPCのバー
//ランダムな色を出すためのRGB変数。
Drow.rndm_color()                               //ランダムカラー生成
let rndm_r:number                               //
let rndm_g:number                               //
let rndm_b:number                               //
//key
let upFlag:boolean                             = false //矢印キー上
let downFlag:boolean                           = false //矢印キー下
let spaceFlag:boolean                          = false //スペースキー
let rFlag:boolean                              = false //"R"キー
let shiftFlag:boolean                          = false //シフトキー
//score
const winpoint:number                          = 10
let player_score:number                        = 0
let npc_score:number                           = 0
let win_flag:boolean                             //勝利判定
//その他の変数。
let tick:number                                = 0
let intervaltimer:number                       = 0
//ネット系
// const socket:WebSocket = new WebSocket("ws://localhost:5001")



function main()
{
   context.transform(1, 0, 0, -1, 0, canvas.height)
   context.fillStyle = 'rgb(00,255,00)'
   document.addEventListener("keydown", keyDownFunc)
   document.addEventListener("keyup", keyUpFunc)
   setInterval(gameLoop, FPS)
}
 
function gameLoop()
{
   tick += 1
   app.execution(App.scene)
}

function keyDownFunc(event:{keyCode:number;})
{
   if (event.keyCode == 32) spaceFlag = true
   if (event.keyCode == 38) upFlag    = true
   if (event.keyCode == 40) downFlag  = true
   if (event.keyCode == 82) rFlag     = true
   if (event.keyCode == 16) shiftFlag = true
}

function keyUpFunc(event:{keyCode:number;})
{
   if (event.keyCode == 32) spaceFlag = false
   if (event.keyCode == 38) upFlag    = false
   if (event.keyCode == 40) downFlag  = false
   if (event.keyCode == 82) rFlag     = false
   if (event.keyCode == 16) shiftFlag = false
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