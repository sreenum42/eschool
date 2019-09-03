import { TestBed } from '@angular/core/testing';

import { DiscoverMoreService } from './discover-more.service';

describe('DiscoverMoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DiscoverMoreService = TestBed.get(DiscoverMoreService);
    expect(service).toBeTruthy();
  });
});
