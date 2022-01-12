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
        i_type: this.configData?.i_type,
        ssid: this.configData?.ssid,
        pwd:this.configData?.pwd,
        security: this.configData?.security,
        apn: this.configData?.apn,
        gsm_pass: this.configData?.gsm_pass,
        gsm_type:this.configData?.gsm_type
      })
      console.log(this.configData);
    })
   }

  networkConfig = new FormGroup({
    i_type: new FormControl(''),
    ssid: new FormControl(''),
    pwd: new FormControl(''),
    security: new FormControl(''),
    apn: new FormControl(''),
    gsm_pass: new FormControl(''),
    gsm_type: new FormControl('')
  });

  ngOnInit(): void {
  }
SaveData(){
  this.config.saveNetworkConfigData(this.networkConfig.value).subscribe((result)=>{
    console.log(result);
  });
  this.networkConfig.reset();
}

}
