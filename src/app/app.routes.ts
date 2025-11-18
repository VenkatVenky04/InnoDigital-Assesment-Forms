import { Routes } from '@angular/router';
import { Form1 } from './forms/form1/form1';
import { Form2 } from './forms/form2/form2';
import { Form3 } from './forms/form3/form3';

export const routes: Routes = [
    { path: '', component: Form1},
    { path: 'form2', component: Form2},
    { path: 'form3', component: Form3}
];
