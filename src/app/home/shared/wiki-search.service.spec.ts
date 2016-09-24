/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WikiSearchService } from './wiki-search.service';

describe('Service: WikiSearch', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WikiSearchService]
    });
  });

  it('should ...', inject([WikiSearchService], (service: WikiSearchService) => {
    expect(service).toBeTruthy();
  }));
});
