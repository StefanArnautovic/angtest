/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ProbaComponent } from './proba.component';

describe('ProbaComponent', () => {
  let component: ProbaComponent;
  let fixture: ComponentFixture<ProbaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProbaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
