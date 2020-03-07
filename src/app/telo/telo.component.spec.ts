/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TeloComponent } from './telo.component';

describe('TeloComponent', () => {
  let component: TeloComponent;
  let fixture: ComponentFixture<TeloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
