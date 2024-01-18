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

  person =[
    {id:1, name:'abhishek'},
    {id:2, name:'tillu'},
    {id:3, name:'gullu'},
    {id:4, name:'kallu'},
    {id:5, name:'bhhddj'},
    {id:6, name:'kakakak'},
  ]

  
/**
 *
 */
constructor(private _messageService:MessageService) {
  this.name = this._messageService.getmessage()

  
  
}
  

 



 
 
}
