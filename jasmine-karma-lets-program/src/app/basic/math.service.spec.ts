import { TestBed } from '@angular/core/testing';

import { MathService } from './math.service';

describe('MathService', () => {
  let service: MathService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MathService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add two numbers correctly', () => {
    expect(service.add(1, 1)).toEqual(2);
  });

  it('should subtract two numbers correctly', () => {
    expect(service.subtract(2, 1)).toEqual(1);
  });

  it('should multiply two numbers correctly', () => {
    expect(service.multiply(2, 2)).toEqual(4);
  });

  it('should divide two numbers correctly', () => {
    expect(service.divide(2, 2)).toEqual(1);
  });

  it('should throw an error when dividing by zero', () => {
    expect(() => service.divide(1, 0)).toThrowError('Cannot divide by zero!');
  });
});
