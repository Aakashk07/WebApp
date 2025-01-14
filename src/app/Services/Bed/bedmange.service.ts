import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CacheInfo } from 'src/app/Component/shared/CacheInfo';
import { BedManagement } from 'src/app/models/bedallocate';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BedmangeService {
  constructor(private http: HttpClient) { }
  //Post Appointment
  AddDetails(value: BedManagement) {
    const token = JSON.parse(CacheInfo.get("currentUser")).token;
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    if (token != null) {
      myHeaders.append('Authorization', `Bearer ${token}`);
    }
    var raw = JSON.stringify(value);
    return fetch(`${environment.URL}BedManagements`, {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    });
  }
  RemoveDetails(value: BedManagement) {
    const token = JSON.parse(CacheInfo.get("currentUser")).token;
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    if (token != null) {
      myHeaders.append('Authorization', `Bearer ${token}`);
    }
    var raw = JSON.stringify(value);
    return fetch(`${environment.URL}BedManagements/DeleteFloorRoomBed`, {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    });
  }
  GetBedDesign(){
    return this.http.get<BedManagement[]>(`${environment.URL}BedManagements`);
  }
  UpdateBedStatus(value: BedManagement) {
    const token = JSON.parse(CacheInfo.get("currentUser")).token;
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    if (token != null) {
      myHeaders.append('Authorization', `Bearer ${token}`);
    }
    var raw = JSON.stringify(value);
    return fetch(`${environment.URL}BedManagements/UpdateBedStatus`, {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    });
  }
}
