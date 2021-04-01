import { IMessage } from '../thatsapp.service';
import { Component, Input } from '@angular/core';
import { ThatsappService } from '../thatsapp.service';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-chatmessage',
  templateUrl: './chatmessage.component.html',
  styleUrls: ['./chatmessage.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('250ms', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class ChatmessageComponent {
  @Input() answer: IMessage;
  @Input() messages: IMessage;
  position: string;

  constructor(public thatsappService: ThatsappService) {}

  //Textnachricht rechts oder links 
  showposition(){
    if (this.answer.name==="Ich"){
      this.position="right";
    }
    else{
      this.position="left";
    }
  }



}
