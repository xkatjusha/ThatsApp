import { IChat } from './../thatsapp.service';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { IMessage, ThatsappService } from '../thatsapp.service';

@Component({
  selector: 'app-send',
  templateUrl: './send.component.html',
  styleUrls: ['./send.component.css'],
})
export class SendComponent {
  @ViewChild("newmessage", { static: false }) newmessage: ElementRef<HTMLInputElement>;
  @Input() person: IChat;

  constructor(public thatsappService: ThatsappService, public elementRef: ElementRef) { }

  send() {
    let imessages: IMessage = {
      name: "Ich",
      message: this.newmessage.nativeElement.value,
    }
    this.person.messages.push(imessages);
    console.log("hallo", this.person.messages);

    this.clear();
  }

  clear() {
    this.newmessage.nativeElement.value = "";
  }



}
