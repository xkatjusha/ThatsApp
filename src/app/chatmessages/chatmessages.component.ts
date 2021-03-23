import { IMessage } from './../thatsapp.service';
import { Component, Input } from '@angular/core';
import { ThatsappService } from '../thatsapp.service';

@Component({
  selector: 'app-chatmessages',
  templateUrl: './chatmessages.component.html',
  styleUrls: ['./chatmessages.component.css']
})
export class ChatmessagesComponent  {
  @Input() answer: IMessage;
  @Input() messages: IMessage;

  constructor(public thatsappService: ThatsappService) { }


}
