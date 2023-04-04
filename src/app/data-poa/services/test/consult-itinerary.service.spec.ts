import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';
import { ConsultItineraryService } from '../consult-itinerary.service';

describe('ConsultItineraryService', () => {
  let service: ConsultItineraryService;
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ConsultItineraryService);
    http = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Call Get with Correct Endpoint For Itinerary Bus', () => {
    const spy = spyOn(http, 'get').and.callThrough();
    service.setItinerary(5000);
    expect(spy).toHaveBeenCalledWith(`${environment.urlItinerary}5000`);
  });
});
