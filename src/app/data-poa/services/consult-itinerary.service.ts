import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BusItinerary } from '../models/bus-itinerary.model';

@Injectable({
  providedIn: 'root',
})
export class ConsultItineraryService {
  constructor(private http: HttpClient) {}

  public setItinerary(id: number): Observable<BusItinerary[]> {
    return this.http.get<BusItinerary[]>(`${environment.urlItinerary}${id}`);
  }
}
