import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PestDetectComponent } from './pest-detect.component';

describe('PestDetectComponent', () => {
  let component: PestDetectComponent;
  let fixture: ComponentFixture<PestDetectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PestDetectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PestDetectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
