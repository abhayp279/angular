import { Component, OnInit } from '@angular/core';
import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'




@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  leaders: Leader[];
  
  constructor(private leaderservice: LeaderService, 
      private location: Location, 
      private route: ActivatedRoute) {
        
        
       

      // console.log(this.leader);
     }
  

  ngOnInit() {
    let id = +this.route.snapshot.params['id'];
    //this.leaders = this.leaderservice.getLeaders();
    this.leaderservice.getLeaders().subscribe(leaders => this.leaders = leaders);
   
  }

}
