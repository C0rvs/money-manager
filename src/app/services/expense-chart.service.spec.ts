import { TestBed } from '@angular/core/testing';

import { ExpenseChartService } from './expense-chart.service';

describe('ExpenseChartService', () => {
  let service: ExpenseChartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpenseChartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
