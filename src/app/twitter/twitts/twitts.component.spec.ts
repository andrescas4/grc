import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwittsComponent } from './twitts.component';

describe('TwittsComponent', () => {
  let component: TwittsComponent;
  let fixture: ComponentFixture<TwittsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwittsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwittsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
