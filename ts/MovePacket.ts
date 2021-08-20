class MovePaket
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