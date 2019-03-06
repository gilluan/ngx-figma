import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxFigmaComponent } from './ngx-figma.component';

describe('NgxFigmaComponent', () => {
  let component: NgxFigmaComponent;
  let fixture: ComponentFixture<NgxFigmaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxFigmaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxFigmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
