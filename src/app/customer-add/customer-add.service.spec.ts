/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CustomerAddService } from './customer-add.service';

describe('CustomerAddService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomerAddService]
    });
  });

  it('should ...', inject([CustomerAddService], (service: CustomerAddService) => {
    expect(service).toBeTruthy();
  }));
});
