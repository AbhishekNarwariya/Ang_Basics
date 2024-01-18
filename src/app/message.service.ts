import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  getmessage():Promise<string>{
    let msg = "helooo abhishek"

    return new Promise(res=>{
       setTimeout(() => {
        res(msg)
        
      }, 3000);
    })

  }
}
