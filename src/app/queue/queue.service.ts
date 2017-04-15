import {Injectable} from "@angular/core";
import {ReplaySubject} from "rxjs";
import * as io from "socket.io-client";

export const HOST:string = '127.0.0.1:3000/';

@Injectable()
export class QueueService {

  socket:any;


  public data:ReplaySubject<any> = new ReplaySubject(1);

  constructor() {
    this.addSocket();
  }


  addSocket():void {

    this.socket = io(HOST);

    this.socket.on('connect', () => {
      this.socket.emit('handshake', {});
    });

    this.socket.on('update', (data) => {
      this.update(data);
    });
  }

  update(data) {
    this.data.next({queueData: data});
  }
}
