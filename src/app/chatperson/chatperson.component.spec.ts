/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ChatpersonComponent } from './chatperson.component';

describe('ChatpersonComponent', () => {
  let component: ChatpersonComponent;
  let fixture: ComponentFixture<ChatpersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatpersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatpersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
