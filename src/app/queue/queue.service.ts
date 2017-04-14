import {Injectable} from "@angular/core";
import {List} from "immutable";
import {BehaviorSubject} from "rxjs/Rx";
import * as io from "socket.io-client";

export const HOST:string = '127.0.0.1:3000/';

@Injectable()
export class QueueService {

  socket:any;

  private _queueData:BehaviorSubject<List<any>> = new BehaviorSubject(List([]));


  constructor() {
    this.addSocket();
  }


  get queueData() {
    return this._queueData.asObservable();
  }


  parseData(data) {
    this.parseCustomers(data.customers);
  }

  parseCustomers(customers) {
    let len = customers.length;
    for (let customer of customers) {
      customer.showPushBack = customers.indexOf(customer) !== len - 1 ? true : false;
    }
  }

  addSocket():void {

    this.socket = io(HOST);

    this.socket.on('connect', () => {
      this.socket.emit('handshake', {});
    });

    this.socket.on('update', (data) => {
      this.parseData(data);
      this.update(data);
    });
  }

  update(data) {
    this._queueData.next(this._queueData.getValue().push({queueData: data}));
  }
}
