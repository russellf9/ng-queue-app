import { Component } from '@angular/core';
import { QueueService } from './queue/queue.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [QueueService]
})
export class AppComponent {
  constructor() {}
}
