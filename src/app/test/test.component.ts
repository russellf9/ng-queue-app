import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { AbstractComponent } from "../abstract/abstract.component";
import {List} from "immutable";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent extends AbstractComponent  {

  constructor(protected changeDetectorRef:ChangeDetectorRef) {
    super();
  }

  markForCheck() {
    this.changeDetectorRef.markForCheck();
  }

  // Override super method
  handleData(list:List<any>):void {
    let data = list.get(-1);
    this.queueData = data && data.queueData ? data.queueData : [];
    console.log('test handleData ', this.queueData);
  }

}
