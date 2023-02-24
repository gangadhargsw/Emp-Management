import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const commonBaseUrl = environment.urls.common_base_api_url;

@Injectable({
  providedIn: 'root'
})
export class EmpserviceService {
  commonUrl: any;

  httpOptions = {
    header: new HttpHeaders({'Content-Type': 'application/json'}),
  };

  requestOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
    }),
  };

  constructor(private _http: HttpClient) { 
    this.commonUrl = {
      employeesList: commonBaseUrl + 'empManage/employees',
    };
  }

  getAllEmployees(): Observable<any> {
    const url = this.commonUrl.employeesList;
    return this._http.get<any>(url);
  }

}
