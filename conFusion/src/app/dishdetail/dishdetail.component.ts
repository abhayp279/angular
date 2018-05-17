import { Component, OnInit, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';




@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {
  
  @Input()
  dishes: Dish;
   
  constructor() {
    // console.log(this.dishes);
   }

  ngOnInit() {
  }

}
