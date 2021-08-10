import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterProjectComponent } from './enter-project.component';

describe('EnterProjectComponent', () => {
  let component: EnterProjectComponent;
  let fixture: ComponentFixture<EnterProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
