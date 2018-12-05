import { TestBed } from '@angular/core/testing';

import { RestapicomponentService } from './restapicomponent.service';

describe('RestapicomponentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestapicomponentService = TestBed.get(RestapicomponentService);
    expect(service).toBeTruthy();
  });
});
