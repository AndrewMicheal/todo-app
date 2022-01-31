import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';
import { DataService } from './../../services/data/data.service';
import { Todo } from './../../shared/todo';

@Component({
  selector: 'app-order-config',
  templateUrl: './order-config.page.html',
  styleUrls: ['./order-config.page.scss'],
})
export class OrderConfigPage implements OnInit {

  form: FormGroup;
  todo: Todo;

  constructor(private fb: FormBuilder , private route: Router , private dataService: DataService ,
    private loadingCtrl: LoadingController , private navCtrl: NavController) {
    this.createForm();
  }

  ngOnInit() {
    this.todo = this.dataService.getParams().todo;
    this.patchForm();
  }

  createForm() {
    this.form = this.fb.group({
      title: ['' , Validators.required] ,
      desc: ['' , Validators.required]
    });
  }

  async onSubmit() {
    console.log(this.form.value);
    // const form = this.form.value;
    // if(this.todo) {
    //   this.todo.title = form.title;
    //   this.todo.desc = form.desc;
    //   this.todo.date = new Date();
    // }
    // this.route.navigate(['/home']);
     const loading = await this.loadingCtrl.create({});
     await loading.present();

     if(this.todo) {
       //editing
     } else {
       const todo = {...this.form.value , date: new Date()};
       this.dataService.postData('/todos' , todo).subscribe(async res => {
         await loading.dismiss();
         this.navCtrl.pop();
       });
     }
  }

  patchForm() {

    console.log(this.todo);

    if(this.todo) {
      this.form.patchValue({
        title: this.todo.title ,
        desc: this.todo.desc
      });
    };
  }


}
