import {Injectable} from "@angular/core";
import {List} from "immutable";
import {BehaviorSubject} from "rxjs/Rx";
import * as io from "socket.io-client";
//import {Time} from "../Time"; // TODO put time data import here!

@Injectable()
export class TimeService {

  socket:any;

  host:string = 'http://localhost:3000/';

  private _times: BehaviorSubject<List<any>> = new BehaviorSubject(List([]));

  constructor() {
    this.addSocket();
  }

  get times() {
    return this._times;
  }

  addSocket():void {

    this.socket = io(this.host);

    this.socket.on('connect', function () {
    }.bind(this));

    this.socket.on('time', function (data) {
      this.updateTime(data);
    }.bind(this));

  }

  updateTime(data) {
    this._times.next(this._times.getValue().push(data));
  }
}

