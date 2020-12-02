import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubendComponent } from './subend.component';

describe('SubendComponent', () => {
  let component: SubendComponent;
  let fixture: ComponentFixture<SubendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
