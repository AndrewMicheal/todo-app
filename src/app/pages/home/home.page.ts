import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Todo } from 'src/app/shared/todo';
import { DataService } from './../../services/data/data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  todos: Todo[];
  loading: boolean;

  constructor(private route: Router, private alertCtrl: AlertController ,
    private dataServices: DataService) { }

  ngOnInit() {
    this.getData();
  }

  createTodo() {
    this.route.navigate(['/order-config']);
  }

  detail(todo: Todo) {
    this.dataServices.setParams({todo});
    this.route.navigate(['/order-detail']);
  }

  async delete(index: number) {
    const alert = await this.alertCtrl.create({
      header: 'Confirm Deleting' ,
      message: 'Are you sure for deleting' ,
      buttons: [
        {
          text: 'No' ,
          role: 'cancel'
        } ,
        {
          text: 'Yes' ,
          handler: () => {
            console.log('delete todo');
            this.todos.splice(index , 1);
          }
        }
      ]
    });
    await alert.present();
  }

  edit(todo: Todo) {
    this.dataServices.setParams({todo});
    this.route.navigate(['/order-config']);
  }

  getData(ev?: any) {
    if(!ev) {
      this.loading = true;
    }
    this.dataServices.getData('/todos')
    .subscribe((res: Todo[]) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      ev ? ev.target.complete() : this.loading = false;
      console.log('hhh');
      this.todos = res;
    });
  }

  refreshPage(event) {
    this.getData(event);
  }

  loadData(event) {
    // setTimeout(()=> {
    //   this.todos = this.todos.concat(this.dataServices.getData());
    //   event.target.complete();
    // },3000);
  }
}
