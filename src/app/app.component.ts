import { Component } from '@angular/core';
import { ThatsappService } from './thatsapp.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ThatsApp';

  constructor(public thatsappService: ThatsappService) {
    this.thatsappService.frontpage();
  }
}
