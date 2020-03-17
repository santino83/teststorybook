import { async, TestBed } from '@angular/core/testing';
import { MynamespaceMylibModule } from './mynamespace-mylib.module';

describe('MynamespaceMylibModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MynamespaceMylibModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(MynamespaceMylibModule).toBeDefined();
  });
});
