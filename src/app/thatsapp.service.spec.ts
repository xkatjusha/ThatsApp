/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ThatsappService } from './thatsapp.service';

describe('Service: Thatsapp', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ThatsappService]
    });
  });

  it('should ...', inject([ThatsappService], (service: ThatsappService) => {
    expect(service).toBeTruthy();
  }));
});
