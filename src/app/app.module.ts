import { ScrollingModule } from '@angular/cdk/scrolling';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { OverviewComponent } from './overview/overview.component';
import { SendComponent } from './send/send.component';
import { ChatpersonComponent } from './chatperson/chatperson.component';
import { ChatmessagesComponent } from './chatmessages/chatmessages.component';
@NgModule({
  declarations: [				
    AppComponent,
      OverviewComponent,
      SendComponent,
      ChatpersonComponent,
      ChatmessagesComponent
   ],
  imports: [
    BrowserModule,
    FormsModule,
    ScrollingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
