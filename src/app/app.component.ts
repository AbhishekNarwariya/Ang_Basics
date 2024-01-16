import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_basics';

  myform:FormGroup



  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.myform = this.fb.group({
      username:[''],
      password:['']
    })
   
  }

  onSubmit(){
    console.log("submitted");
    

  }

 
 
}
