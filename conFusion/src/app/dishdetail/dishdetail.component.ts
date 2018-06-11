import { Component, OnInit, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Dish } from '../shared/dish';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'
import { DishService } from '../services/dish.service';




@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {
  
  // @Input()
  dish: Dish;
   
  constructor(private dishservice: DishService, 
    private location: Location, 
    private route: ActivatedRoute) {
    // console.log(this.dishes);
   }

  ngOnInit() {
    let id = +this.route.snapshot.params['id'];
    this.dishservice.getDish(id).subscribe(dish => this.dish = dish);
  }
  goBack(): void {
    this.location.back();
  }
}
