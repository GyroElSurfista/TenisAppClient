import { Controller, Post, Body } from '@nestjs/common';

import { PlayerService } from './player.service';
import { HostAddrDTO } from './dto/player_addr.dto';
import { ShotDTO } from './dto/shot.dto';

@Controller('player')
export class PlayerController {

    constructor(private readonly playerService:PlayerService){}
    
    @Post('connection')
    playerConnection(@Body() hostAdd:HostAddrDTO){
        const { hostAddr } = hostAdd;
        //console.log("HostAddrDTO recibido: ", hostAdd);
        this.playerService.connectToServer(hostAddr);
    }

    @Post('shot')
    playerShot(@Body() shot:ShotDTO){
        const { intensity } = shot;
        this.playerService.sendShot(intensity);
    }
}
