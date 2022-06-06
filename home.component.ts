import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food.service';
import { Foods } from '../shared/model/food';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  foods: Foods[] = [];


  
  constructor(private fs: FoodService, private router: ActivatedRoute,private communicationService:FoodService,private routes:Router) { 

  }


  ngOnInit(): void {
    
    debugger;
     this.call()
    
  }
 call(){
   debugger


  this.router.params.subscribe((params: any) => {
    if (params['searchItem'])
      this.foods = this.foods.filter((food: any) => food.name.toLowerCase().includes(params['searchItem'].toLowerCase()))
    else if (params['tag'])
      this.foods = this.fs.getAllFoodByTag(params['tag'])

  this.foods = this.fs.getAll();
  this.router.params.subscribe((params: any) => {
    if (params['searchItem'])
      this.foods = this.foods.filter((food: any) => food.name.toLowerCase().includes(params['searchItem'].toLowerCase()))
    else if (params['tag'])
      this.foods = this.fs.getAllFoodByTag(params['tag'])


  })
  })

 }
}


