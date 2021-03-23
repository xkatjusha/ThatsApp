import { IChat } from './../thatsapp.service';
import { Component, Input } from '@angular/core';
import { ThatsappService } from '../thatsapp.service';

@Component({
  selector: 'app-chatperson',
  templateUrl: './chatperson.component.html',
  styleUrls: ['./chatperson.component.css']
})
export class ChatpersonComponent {
@Input() person: IChat;

  constructor(public thatsappService: ThatsappService) { }


}
