/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CustomerAdd } from './customer-add.component';

describe('CustomerAdd', () => {
  let component: CustomerAdd;
  let fixture: ComponentFixture<CustomerAdd>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerAdd ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerAdd);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
