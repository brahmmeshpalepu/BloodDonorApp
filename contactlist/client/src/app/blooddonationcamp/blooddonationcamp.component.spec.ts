import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlooddonationcampComponent } from './blooddonationcamp.component';

describe('BlooddonationcampComponent', () => {
  let component: BlooddonationcampComponent;
  let fixture: ComponentFixture<BlooddonationcampComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlooddonationcampComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlooddonationcampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
