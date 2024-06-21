import { Module } from '@nestjs/common';
import { PlayerService } from './player.service';
import { PlayerController } from './player.controller';

@Module({
  imports: [],
  controllers: [PlayerController],
  providers: [PlayerService],
})
export class PlayerModule {}
