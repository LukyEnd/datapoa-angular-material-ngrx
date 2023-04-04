import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';
import { ConsultApiService } from '../consult-api.service';

describe('ConsultApiService', () => {
  let service: ConsultApiService;
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ConsultApiService);
    http = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Call Get with Correct Endpoint For Bus', () => {
    const spy = spyOn(http, 'get').and.callThrough();
    service.apiBusLine('bus');
    expect(spy).toHaveBeenCalledWith(`${environment.urlBus}o`);
  });

  it('Call Get with Correct Endpoint For miniBus', () => {
    const spy = spyOn(http, 'get').and.callThrough();
    service.apiBusLine('miniBus');
    expect(spy).toHaveBeenCalledWith(`${environment.urlBus}l`);
  });
});
