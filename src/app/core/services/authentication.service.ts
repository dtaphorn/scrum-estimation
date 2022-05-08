import { HttpClient }  from '@angular/common/http';
import { Injectable }  from '@angular/core';
import { ILogin }      from 'src/app/core/interfaces/ilogin';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private http: HttpClient
  ) {

  }

  login(payload: ILogin) {
    return this.http.post(environment.api.url + '/auth/login', payload);
  }

  getProfile() {
    return this.http.get(environment.api.url + '/profile');
  }
}
