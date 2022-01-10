import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-rfid',
  templateUrl: './rfid.component.html',
  styleUrls: ['./rfid.component.css']
})
export class RfidComponent implements OnInit {
  configData: any;

  constructor( private config: ConfigService) { 
    
    this.config.getRfidConfigData().subscribe((data)=>{
      this.configData = data;
      this.rfidConfig.patchValue({
        // rfidTag1: this.configData?.title,
        rfidTag1: this.configData?.tag1,
        rfidTag2: this.configData?.tag2,
        rfidTag3: this.configData?.tag3,
        rfidTag4: this.configData?.tag4,
        rfidTag5: this.configData?.tag5,
      })
      console.log(this.configData);
    })
  }

  rfidConfig = new FormGroup({
  rfidTag1: new FormControl(''),
  rfidTag2: new FormControl(''),
  rfidTag3: new FormControl(''),
  rfidTag4: new FormControl(''),
  rfidTag5: new FormControl(''),
  });

  ngOnInit(): void {  
  }

  SaveData(){
  this.config.saveRfidConfigData(this.rfidConfig.value);
  }
}
