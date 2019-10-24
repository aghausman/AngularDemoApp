import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {


  apiURL:string = "http://intranet.wsa.local/_api/sp.userprofiles.peoplemanager";

  constructor(private httpClient : HttpClient) {

  }


  public getUser(user: string){

    return this.httpClient.get(`${this.apiURL}/getpropertiesfor(@v)?@v=${user}`)
  }
}
