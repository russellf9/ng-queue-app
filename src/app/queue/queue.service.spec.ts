/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { QueueService } from './queue.service';

describe('QueueService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QueueService]
    });
  });

  it('should ...', inject([QueueService], (service: QueueService) => {
    expect(service).toBeTruthy();
  }));
});
