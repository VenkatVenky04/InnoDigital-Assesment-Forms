import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form2',
  imports: [FormsModule],
  templateUrl: './form2.html',
  styleUrl: './form2.scss',
})
export class Form2 {
  constructor(private router: Router){}
  form2 = {
    name: '',
    pan: '',
    dob: '',
  }

  onSubmit(form: any) {
    if(form.valid) {
      this.router.navigate(['form3'])
    } else {
      alert('please fill all the fields..')
    }
  }
}
