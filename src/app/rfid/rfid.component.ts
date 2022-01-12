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
        tag1: this.configData?.tag1,
        tag2: this.configData?.tag2,
        tag3: this.configData?.tag3,
        tag4: this.configData?.tag4,
        tag5: this.configData?.tag5,
      })
      console.log(this.configData);
    })
  }

  rfidConfig = new FormGroup({
  tag1: new FormControl(''),
  tag2: new FormControl(''),
  tag3: new FormControl(''),
  tag4: new FormControl(''),
  tag5: new FormControl(''),
  });

  ngOnInit(): void {  
  }

  SaveData(){
  this.config.saveRfidConfigData(this.rfidConfig.value).subscribe((result)=>{
  console.log(result);
  });
  this.rfidConfig.reset();  
  }
}
