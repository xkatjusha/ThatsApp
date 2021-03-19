import { Component, ElementRef, ViewChild } from '@angular/core';
import { ThatsappService } from '../thatsapp.service';

@Component({
  selector: 'app-send',
  templateUrl: './send.component.html',
  styleUrls: ['./send.component.css']
})
export class SendComponent {
  @ViewChild("newmessage", { static: false }) newmessage: ElementRef<HTMLInputElement>;
  message: string;


  constructor(public thatsappService: ThatsappService, public elementRef: ElementRef) {
   }

   send(){
     this.thatsappService.chatList.push();
     this.clear();
   }

   clear() {
    this.newmessage.nativeElement.value = "";
  }


}
