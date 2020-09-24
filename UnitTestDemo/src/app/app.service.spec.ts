import { TestBed } from '@angular/core/testing';

import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('add()', () => {
    it('should have method', () => {
      expect(service.add).toBeDefined();
    });

    it('should add two numbers', () => {
      expect(service.add(2, 3)).toEqual(2 + 3);
    });
  });

  describe('divide()', () => {
    it('should throw error if y is zero', () => {
      expect(() => service.divide(1, 0)).toThrowError('cannot divide by zero');
    });
  });
});
