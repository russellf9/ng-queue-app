/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetCustomersService } from './get-customers.service';

describe('GetCustomersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetCustomersService]
    });
  });

  it('should ...', inject([GetCustomersService], (service: GetCustomersService) => {
    expect(service).toBeTruthy();
  }));
});
