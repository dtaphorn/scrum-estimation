import { HttpClient }  from '@angular/common/http';
import { Injectable }  from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(
    private http: HttpClient
  ) { }

  getConnection() {
    return this.http.get(environment.api.url);
  }
}
