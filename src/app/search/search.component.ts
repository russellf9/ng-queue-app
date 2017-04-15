import {Component, Output, EventEmitter} from "@angular/core";

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent  {

  @Output() onUpdate:EventEmitter<String> = new EventEmitter<String>();

  search:String = '';

  constructor() { }

  // ==== EVENTS ====

  updateSearch(event) : void {
    this.search = event;
    this.onUpdate.emit(event);
  }

  clearSearch() {
    this.updateSearch('');
  }
}

