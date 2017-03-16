import {Injectable} from '@angular/core';
import {List} from "immutable";
import {BehaviorSubject} from "rxjs/Rx";
import * as io from "socket.io-client";


@Injectable()
export class QueueService {

  socket:any;

  host:string = 'http://localhost:3000/';

  private _queueData:BehaviorSubject<List<any>> = new BehaviorSubject(List([]));

  constructor() {
    this.addSocket();
  }

  get queueData() {
    return this._queueData;
  }

  addSocket():void {

    this.socket = io(this.host);

    this.socket.on('connect', () => {
      this.socket.emit('handshake', {});
    });

    this.socket.on('update', (data) => {
      this.update(data);
    });
  }

  update(data) {
    console.log('QueueService -> update ', data);
    this._queueData.next(this._queueData.getValue().push({queueData: data}));
  }
}
