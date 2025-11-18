import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";

@Component({
  selector: 'app-form3',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './form3.html',
  styleUrl: './form3.scss',
})
export class Form3 {
  userForm!: FormGroup;
  userData: any;
  constructor(private fb:FormBuilder){}
  
  ngOnInit() {
    this.userData = localStorage.getItem("userData");
    if(this.userData) {
      this.userData = JSON.parse(this.userData)
    }
    this.userForm = this.fb.group({
      username: ['', [Validators.required]],
      name: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]]
    })
  }

  onSubmit() {
    if(this.userForm.invalid){
      alert('please enter all the fields')
    } else {
      console.log(this.userForm)
      this.userData = this.userForm.value;
      console.log("user data", this.userData)
    }
  }
}
