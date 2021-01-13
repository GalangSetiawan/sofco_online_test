import { Component, OnInit } from '@angular/core';
import { BookstoreService } from '../../service/bookstore.service'
import { interval, Subscription } from 'rxjs';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  subscription: Subscription;
  intervalId: number;
  dataCart:any = [];
  
  constructor(private bookSvc:BookstoreService) {
  }
  
  ngOnInit() {
    console.log('dataCart | shoplist===>',this.dataCart);
    const source = interval(1000);
    this.subscription = source.subscribe(val => this.dataCart = this.bookSvc.getDataCart());
  }

 
  

}

