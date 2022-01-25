import { Component, OnInit } from '@angular/core';
import {ProdService} from '../prod.service';

@Component({
  selector: 'app-product1',
  templateUrl: './product1.component.html',
  styleUrls: ['./product1.component.css']
})
export class Product1Component implements OnInit {
  products: any;

  constructor(private pro:ProdService) { }

  ngOnInit(): void {
    this.pro.getProducts().subscribe((data)=>{
      this.products=JSON.parse(JSON.stringify(data))
      console.log(data);
    })
  }

}
