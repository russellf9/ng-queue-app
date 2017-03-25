import {Injectable} from "@angular/core";
import {List} from "immutable";
import {BehaviorSubject} from "rxjs/Rx";
import * as io from "socket.io-client";
import {HOST} from "./../queue/queue.service";
import {Time} from "./../time/time.model";
import * as moment from "moment";


@Injectable()
export class TimeService {

  socket:any;

  private _times: BehaviorSubject<List<Time>> = new BehaviorSubject(List([]));

  constructor() {
    this.addSocket();
  }

  get times() {
    return this._times;
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
    this._times.next(this._times.getValue().push(new Time(moment(data.date))));
  }
}

