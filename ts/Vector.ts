class Vector
{
    readonly x:number //objの座標と更新量を扱う。
    readonly y:number //objの座標と更新量を扱う。

    constructor(x:number,y:number)
    {
        this.x = x
        this.y = y
    }
    public add(other:Vector):Vector
    {
        return new Vector(this.x+other.x,this.y+other.y)
    }
    public addRotation(amount:number):Vector 
    {
        const r = Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2))
        const s = Math.atan2(this.y,this.x) + (amount) * (Math.PI/180)
        const x = r*Math.cos(s)
        const y = r*Math.sin(s)
        return new Vector(x,y)
    }
    public setRotation(amount:number):Vector 
    {
        const r = Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2))
        const s = amount * (Math.PI/180)
        const x = r*Math.cos(s)
        const y = r*Math.sin(s)
        return new Vector(x,y)
    }  
    public miner(other:Vector):Vector
    {
        return new Vector(this.x-other.x,this.y-other.y)
    }
    public abs():Vector 
    {
        return new Vector(Math.abs(this.x),Math.abs(this.y))
    }

 
}