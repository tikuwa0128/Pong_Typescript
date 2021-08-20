class Update
{
    start_scene()
    {
        if(spaceFlag) App.scene = "game"
    }

    game_scene()
    {
        if (player_score >= winpoint || npc_score >= winpoint) //スコア判定。
        {
            if (player_score >= winpoint) win_flag = true
            if(npc_score >= winpoint) win_flag = false
            App.scene ="end" 
        }
        if (rFlag) //バグったときのリッセとボタン。NPC側からスタート。
        {
            box.location    = new Vector(640,360)
            player.location = new Vector(100,240)
            npc.location    = new Vector(1150,240)
            boxVector       = new Vector(Update.direction(false),0)
        }
        box.location = box.location.add(boxVector) //Boxの現在位置を更新。
        ////動きについての処理。
        if (upFlag == true) //Playerの動き処理上。
        {
            if (!(player.location.y > 490))
            {
                const vector = new Vector(0,1)
                const packet = new MovePaket("left",vector)
                console.log(packet.toJson())//
                // socket.send(packet.toJson())
                player.location = new Vector(player.location.x,player.location.y + player_lodspeed)
            }
        }
        if (downFlag == true)　//Playerの動き処理下。
        {
            if (!(player.location.y < 0))
            {
                const vector = new Vector(0,-1)
                const packet = new MovePaket("left",vector)
                console.log(packet.toJson())//
                // socket.send(packet.toJson())
                player.location = new Vector(player.location.x,player.location.y - player_lodspeed)
            }
        }
        if (npc.getCenter().y < box.getCenter().y) //NPCの動き処理上。
        {
            if (!(npc.location.y > 490)) npc.location = npc.location.add(new Vector(0,npc_lodspeed))
        }
        if (npc.getCenter().y > box.getCenter().y)　////NPCの動き処理下。
        {
            if (!(npc.location.y < 0)) npc.location = npc.location.add(new Vector(0,-1*npc_lodspeed))
        }
        ////反射についての処理。
        if(box.location.y >= 690)  //天井にあたった時の反射。
        {
            Drow.rndm_color()
            boxVector = new Vector(boxVector.x, -boxVector.y)
        }
        if(box.location.y <= 0) //床にあたった時の反射。
        {
            Drow.rndm_color()
            boxVector = new Vector(boxVector.x, -boxVector.y)
        }
        if(box.location.x >= 1250) //NPC側の壁にあたった時の処理。
        {
            box.location    = new Vector(640,360)
            player.location = new Vector(100,240)
            npc.location    = new Vector(1150,240)
            boxVector       = new Vector(Update.direction(false),0)
            player_score     += 1
        }
        if(box.location.x <= 0)//Player側の壁にあたった時の処理。
        {
            box.location    = new Vector(640,360)
            player.location = new Vector(100,240)
            npc.location    = new Vector(1150,240)
            boxVector       = new Vector(Update.direction(true),0)
            npc_score        += 1
        }
        if(box.isAttatch(player)) //Playerにあたった時の反射処理。
        {
            reflection_angle = Update.rndm_rflection()
            Drow.rndm_color()
            // console.log(reflection_angle) //
            const dy  = box.getCenter().y - player.getCenter().y
            // console.log("player"+dy)
            boxVector = new Vector(Update.direction(false),0)
            boxVector = boxVector.addRotation(dy*this.reflection())
        }
        if(box.isAttatch(npc)) //NPCにあたった時の反射処理。
        {
            reflection_angle = Update.rndm_rflection()
            Drow.rndm_color()
            // console.log(reflection_angle) //
            const dy  = box.getCenter().y - npc.getCenter().y
            // console.log("npc"+dy)
            boxVector = new Vector(Update.direction(true),0)
            boxVector = boxVector.addRotation(dy* -reflection_angle)
            
        }
    }

    end_scene()
    {
        if (rFlag)
        {
            this.reset_game() //値をリセット。
            App.scene = "game"
        }
    }
    
    public reset_game() //ゲームのリスタート処理。
    {
        player_score = 0
        npc_score = 0
        box.location    = new Vector(640,360)
        player.location = new Vector(100,240)
        npc.location    = new Vector(1150,240)
        boxVector       = new Vector(Update.direction(false),0)
    }

    public reflection():number //シフトでプレイヤーの反射を反転する。
    {
        if (shiftFlag) return reflection_angle * -1
        else return reflection_angle
    }

    static rndm_rflection():number //反射角度のランダム化
    {
        const n                       = Math.random()
        const random_rflection:number = Number(n.toFixed(1))
        return random_rflection
    }

    static direction(direction:boolean):number //ボールの反射の向きを出す。Trueだと左、Falseだと右。
    {
        if (direction) return box_speed * -1
        else return box_speed
    }
    
}