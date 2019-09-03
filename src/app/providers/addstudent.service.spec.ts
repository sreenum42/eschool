import { TestBed } from '@angular/core/testing';

import { AddstudentService } from './addstudent.service';

describe('AddstudentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddstudentService = TestBed.get(AddstudentService);
    expect(service).toBeTruthy();
  });
});
