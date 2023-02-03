import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstanceManagementComponent } from './instance-management.component';

describe('InstanceManagementComponent', () => {
  let component: InstanceManagementComponent;
  let fixture: ComponentFixture<InstanceManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstanceManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstanceManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
