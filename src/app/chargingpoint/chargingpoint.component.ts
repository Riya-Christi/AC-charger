import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-chargingpoint',
  templateUrl: './chargingpoint.component.html',
  styleUrls: ['./chargingpoint.component.css']
})
export class ChargingpointComponent implements OnInit {

  configData: any;

  constructor( private config: ConfigService) {
    this.config.getChargingpointData().subscribe((data)=>{
      this.configData = data;
      this.chargingpointConfig.patchValue({
        //  modelname: this.configData?.title,
        modelname: this.configData?.cp_modelname,
        serialNo: this.configData?.cp_srnumber,
        vendor: this.configData?.cp_vendor,
        latitude: this.configData?.cp_lat,
        longitude: this.configData?.cp_long,
        version: this.configData?.cp_fwver,
        url: this.configData?.cp_url,
        max_connector: this.configData?.cp_connector,
        rfid: this.configData?.cp_rfid
      })
      console.log(this.configData);
    })
  }

  chargingpointConfig = new FormGroup({
    modelname: new FormControl(''),
    serialNo: new FormControl(''),
    vendor: new FormControl(''),
    latitude: new FormControl(''),
    longitude: new FormControl(''),
    version: new FormControl(''),
    url: new FormControl(''),
    max_connector: new FormControl(''),
    rfid: new FormControl(''),
  })
  ngOnInit(): void {
  }
  SaveData(){
    this.config.saveChargingpointData(this.chargingpointConfig.value)
  }

}
