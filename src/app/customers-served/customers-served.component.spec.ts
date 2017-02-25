/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CustomersServed } from './customers-served.component';

describe('CustomersServed', () => {
  let component:   CustomersServed;
  let fixture: ComponentFixture<  CustomersServed>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [   CustomersServed ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(  CustomersServed);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
