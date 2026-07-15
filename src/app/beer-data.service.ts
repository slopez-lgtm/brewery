import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Beer } from './beer-list/Beer';
import { Observable } from 'rxjs';

const URL = 'https://6917432da7a34288a2802493.mockapi.io/api/v1/beers';

@Injectable({
  providedIn: 'root'
})
export class BeerDataService {
  constructor(private http: HttpClient) { }

  public getAll(): Observable<Beer[]> {
    return this.http.get<Beer[]>(URL);
  }
}