import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form1',
  imports: [FormsModule],
  templateUrl: './form1.html',
  styleUrl: './form1.scss',
})
export class Form1 {
  constructor(private router: Router) { }

  user = {
    phone: '',
    email: '',
    otp: ''
  }

  ngOnInit() {
    const array = [1,2,3,4,5,6,7,8,9,10,13,16,18,20];
    let filtered = array.filter(fil => fil % 2 !== 0)
    // .reduce((sum, num) => sum + num, 0);
    console.log(filtered, "filtered array res")
  }

  onSubmit(form: any) {
    console.log("form", form.valid);
    
    this.user.phone = this.user.phone.replace(/[^0-9]/g, '');
    console.log("form", this.user);
    if (form.valid) {
      this.router.navigate(['form2'])
    } else {
      alert('Please fill all fields correctly!');
    }
  }
}
