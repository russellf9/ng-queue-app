/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CustomersServedService } from './customers-served.service';

describe('CustomersServedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomersServedService]
    });
  });

  it('should ...', inject([CustomersServedService], (service: CustomersServedService) => {
    expect(service).toBeTruthy();
  }));
});
