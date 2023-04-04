import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BusLineDetail } from '../models/bus-line.model';

@Injectable({
  providedIn: 'root',
})
export class ConsultApiService {
  constructor(private http: HttpClient) {}

  public apiBusLine(model: string): Observable<BusLineDetail[]> {
    if (model == 'bus') {
      return this.http.get<BusLineDetail[]>(`${environment.urlBus}o`);
    } else {
      return this.http.get<BusLineDetail[]>(`${environment.urlBus}l`);
    }
  }
}
