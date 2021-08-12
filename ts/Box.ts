class Box
{
    readonly top:number
    readonly end:number
    public location:Vector

    constructor(loc:Vector,top:number,end:number)
    {
        this.location = loc
        this.top      = top
        this.end      = end
    }

    public fill(context:CanvasRenderingContext2D)
    {
        context.fillRect(this.location.x,this.location.y,this.end,this.top)
    }

    public getCenter():Vector 
    {
        return this.location.add(new Vector(this.end/2,this.top/2))
    }

    public isAttatch(other:Box):boolean
    {
        const centerDirection:Vector = this.getCenter().miner(other.getCenter()).abs()
        const xySum:Vector           = new Vector((this.end/2)+(other.end/2),(this.top/2)+(other.top/2))
        return ((centerDirection.x <= xySum.x) && (centerDirection.y <= xySum.y))
    }

}