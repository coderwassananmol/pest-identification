import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubfaqsComponent } from './subfaqs.component';

describe('SubfaqsComponent', () => {
  let component: SubfaqsComponent;
  let fixture: ComponentFixture<SubfaqsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubfaqsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubfaqsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
