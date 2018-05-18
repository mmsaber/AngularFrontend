import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpParams } from '@angular/common/http';
import 'rxjs/Rx';

@Injectable()
export class RetrieveDataService {
  constructor(private http: Http) {

  }
  getBadfetchCalls() {
    const headersValue = new Headers({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });
    const params = new HttpParams({
      fromObject: {
        'startDateTime': '28-04-2018 00:00:00',
        'endDateTime': '28-04-2018 00:00:00',
      }
    });


    return this.http.get("https://localhost:8443/ts/api/hc/badfetchcalls?" + params).map(
      (response: Response) => {
        const data = response.json();
        if(response.status == 200){
          return data;
        }
        else{
          alert(response.status);
          return null;
        }
      }
    );
  }

  getDropCalls() {
    const params = new HttpParams({
      fromObject: {
        'startDateTime': '28-04-2018 00:00:00',
        'endDateTime': '28-04-2018 00:00:00',
      }
    });
    return this.http.get("https://localhost:8443/ts/api/hc/badfetchcalls?" + params).map(
      (response: Response) => {
        const data = response.json();
        return data;
      }
    );
  }
  loginService(username:string, password:string){
    return this.http.get("https://localhost:8443/ts/api/v1/users/"+ username +"?password="+password);
  }
}
