import { Component, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import moment from 'moment';
import { MessageService } from './message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_basics';

  name:Promise<string>

  
/**
 *
 */
constructor(private _messageService:MessageService) {
  this.name = this._messageService.getmessage()

  
  
}
  

 



 
 
}
