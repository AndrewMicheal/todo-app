import { Component, OnDestroy, OnInit } from '@angular/core';
import { Todo } from './../../shared/todo';
import { DataService } from './../../services/data/data.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.page.html',
  styleUrls: ['./order-detail.page.scss'],
})
export class OrderDetailPage implements OnInit , OnDestroy {

  todo: Todo;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.todo = this.dataService.getParams().todo;
  }

  ngOnDestroy() {
    this.dataService.setParams({});
  }
}
