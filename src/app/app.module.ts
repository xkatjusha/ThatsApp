import { ScrollingModule } from '@angular/cdk/scrolling';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { OverviewComponent } from './overview/overview.component';
import { SendComponent } from './send/send.component';
import { ChatpersonComponent } from './chatperson/chatperson.component';
import { ChatmessageComponent } from './chatmessage/chatmessage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [				
    AppComponent,
      OverviewComponent,
      SendComponent,
      ChatpersonComponent,
      ChatmessageComponent
   ],
  imports: [
    BrowserModule,
    FormsModule,
    ScrollingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
