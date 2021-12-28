import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RfidComponent } from './rfid/rfid.component';
import { NetworkComponent } from './network/network.component';
import { ChargingpointComponent } from './chargingpoint/chargingpoint.component';
import { ChargeConnectorComponent } from './charge-connector/charge-connector.component';

@NgModule({
  declarations: [
    AppComponent,
    RfidComponent,
    NetworkComponent,
    ChargingpointComponent,
    ChargeConnectorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
