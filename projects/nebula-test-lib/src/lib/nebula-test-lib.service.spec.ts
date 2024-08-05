import { TestBed } from '@angular/core/testing';

import { NebulaTestLibService } from './nebula-test-lib.service';

describe('NebulaTestLibService', () => {
  let service: NebulaTestLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NebulaTestLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
