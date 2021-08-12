class App
{
    static scene:string
    drow:Drow     = new Drow()
    update:Update = new Update()

    constructor(scene:string)
    {
        App.scene = scene
    }

    change_scene(scene:string)
    {
        App.scene = scene
    }

    execution(scene:string)
    {
        // console.log(scene)
        Drow.canvas_clear()
        switch (scene) 
        {
            case "start":
                this.update.start_scene()
                this.drow.start_scene()
                break
            case "game":
                this.update.game_scene()
                this.drow.game_scene()
                break
            case "end":
                this.update.end_scene()
                this.drow.end_scene()
                break
            default:
                console.log("erro")
                break;
        }
    }
}