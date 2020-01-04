import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NameColumnComponent } from './name-column.component';

describe('NameColumnComponent', () => {
  let component: NameColumnComponent;
  let fixture: ComponentFixture<NameColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NameColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NameColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
