import {Injectable} from "@angular/core";
import {ReplaySubject} from "rxjs";
import * as io from "socket.io-client";
import {HOST} from "./../queue/queue.service";


@Injectable()
export class TimeService {

  socket:any;

  public time:ReplaySubject<any> = new ReplaySubject(1);

  constructor() {
    this.addSocket();
  }

  addSocket():void {
    this.socket = io(HOST);

    this.socket.on('connect', function () {
    }.bind(this));

    this.socket.on('time', function (data) {
      this.updateTime(data);
    }.bind(this));
  }

  updateTime(data) {
    this.time.next(data);
  }
}

