import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NebulaTestLibComponent } from './nebula-test-lib.component';

describe('NebulaTestLibComponent', () => {
  let component: NebulaTestLibComponent;
  let fixture: ComponentFixture<NebulaTestLibComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NebulaTestLibComponent]
    });
    fixture = TestBed.createComponent(NebulaTestLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
