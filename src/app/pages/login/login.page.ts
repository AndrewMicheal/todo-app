import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder , private route: Router) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.form = this.fb.group({
      username: ['' , Validators.required] ,
      password: ['' , Validators.required]
    });
  }

  onSubmit() {
    console.log(this.form.value);
    // routing / home
    this.route.navigate(['/home']);
  }

}
