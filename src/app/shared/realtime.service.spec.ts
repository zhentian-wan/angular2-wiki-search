/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RealtimeService } from './realtime.service';

describe('Service: Realtime', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RealtimeService]
    });
  });

  it('should ...', inject([RealtimeService], (service: RealtimeService) => {
    expect(service).toBeTruthy();
  }));
});
