import { Injectable, OnModuleInit } from '@nestjs/common';
import { Socket, io } from 'socket.io-client';

@Injectable()
export class PlayerService {
  private socket: Socket;

  connectToServer(server: string) {

    if(this.isSocketConnected()){
      console.log('The socket is already connected');
      console.log(this.socket);
    }

    console.log(`Trying to connect to: ${server}`);
    this.socket = io(server);

    this.socket.on('connect', () => {
      console.log('Connected to server');
    });

    this.socket.on('disconnect', () => {
      console.log('Disconnected from server');
    });

    this.socket.on('error', (error:any) =>{
      console.log('Socket error: ', error);
    });

    this.socket.on('get_shot', (data: any) => {
      console.log(`Received shot with intensity: ${data.intensity}`);
    })
  }

  isSocketConnected():boolean{
    return this.socket && this.socket.connected;
  }

  sendShot(intensity:number) {
    this.socket.emit('shot', { "intensity": intensity });
  }


}
