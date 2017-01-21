/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HearderCompComponent } from './hearder-comp.component';

describe('HearderCompComponent', () => {
  let component: HearderCompComponent;
  let fixture: ComponentFixture<HearderCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HearderCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HearderCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
