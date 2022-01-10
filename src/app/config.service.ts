import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  RfidURL = environment.RfidUrl; 
  NetworkURL = environment. NetworkUrl;
  ChargingpointURL = environment.ChargingpointUrl;
  ConnectorURL = environment.ConnectorUrl;

  constructor(private http: HttpClient) { }
  getRfidConfigData(){
    return this.http.get(this.RfidURL);
  }

  getNetworkConfigData(){
    // let url='';
    return this.http.get(this.NetworkURL);
  }

  getChargingpointData(){
    return this.http.get(this.ChargingpointURL);
  }

  getConnectorData(){
    return this.http.get(this.ConnectorURL);
  }

  saveRfidConfigData(data: { value: any; }){
    console.log(data);
    // let url = ''
    return this.http.post(this.RfidURL, data); 
  }

  saveNetworkConfigData(data: any){
    console.log(data);
    return this.http.post(this.NetworkURL, data); 
  }

  saveChargingpointData(data: any){
    console.log(data);
    return this.http.post(this.ChargingpointURL, data); 
  }

  saveConnectorConfigData(data: any){
    console.log(data);
    return this.http.post(this.ConnectorURL, data); 
  }
}
