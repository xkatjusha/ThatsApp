import { ThatsappService } from './../thatsapp.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent  {
  selectedList: any;

  constructor(public thatsappService: ThatsappService) {
    this.selectedList = thatsappService.chatList[0]
   }

   //chats auswahl
   selectList(personTodo) {
    this.selectedList = personTodo;
  }

}
