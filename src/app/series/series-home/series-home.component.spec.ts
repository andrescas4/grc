import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesHomeComponent } from './series-home.component';

describe('SeriesHomeComponent', () => {
  let component: SeriesHomeComponent;
  let fixture: ComponentFixture<SeriesHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeriesHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
