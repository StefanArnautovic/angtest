/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GalerijaComponent } from './galerija.component';

describe('GalerijaComponent', () => {
  let component: GalerijaComponent;
  let fixture: ComponentFixture<GalerijaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalerijaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalerijaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
