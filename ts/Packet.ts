class MovePaket //動きの更新を送信。
{
    readonly player:"left"|"right"
    readonly vector:Vector

    constructor(player:"left"|"right", vector:Vector)
    {
        this.player = player
        this.vector = vector
    }

    public toJson():string
    {
        return JSON.stringify(this)
    }
}

class ColorPaket //色の変化を送信。
{
    readonly r:number
    readonly g:number
    readonly b:number

    constructor(r:number,g:number,b:number)
    {
        this.r = r
        this.g = g
        this.b = b
    }

    public toJson():string
    {
        return JSON.stringify(this)
    }
}