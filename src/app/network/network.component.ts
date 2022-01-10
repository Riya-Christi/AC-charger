import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.css']
})
export class NetworkComponent implements OnInit {
  configData: any;

  constructor( private config: ConfigService) {

    this.config.getNetworkConfigData().subscribe((data)=>{
      this.configData = data;
      this.networkConfig.patchValue({
        interfaceType: this.configData?.i_type,
        wifiName: this.configData?.ssid,
        wifi_pswd:this.configData?.pwd,
        security: this.configData?.security,
        apn_name: this.configData?.apn,
        apn_pswd: this.configData?.gsm_pass,
        GSM_type:this.configData?.gsm_type
      })
      console.log(this.configData);
    })
   }

  networkConfig = new FormGroup({
    interfaceType: new FormControl(''),
    wifiName: new FormControl(''),
    wifi_pswd: new FormControl(''),
    security: new FormControl(''),
    apn_name: new FormControl(''),
    apn_pswd: new FormControl(''),
    GSM_type: new FormControl('')
  });

  ngOnInit(): void {
  }
SaveData(){
  this.config.saveNetworkConfigData(this.networkConfig.value);
}

}
