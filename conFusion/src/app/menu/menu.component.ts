import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  dishes = Dish[0];

  selectedDish: Dish;
 

  onSelect(dishes: Dish) {
    this.selectedDish = dishes;
  }
 
 constructor(private dishService: DishService) { 
  console.log(this.dishes);
 }

  ngOnInit() {
    this.dishes = this.dishService.getDishes().then(dishes => this.dishes = dishes);
  }

}