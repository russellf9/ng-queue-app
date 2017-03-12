import {Injectable} from '@angular/core';
import * as moment from "moment";

@Injectable()
export class Time {

  constructor(public date:moment) {
  }

}
