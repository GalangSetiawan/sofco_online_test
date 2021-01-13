import { Component, OnInit } from '@angular/core';
import { BookstoreService } from '../../service/bookstore.service'
import * as _ from "lodash";
import * as $ from 'jquery'
declare var UIkit: any;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = "home";
  masterBook:any = [];

  constructor(private bookSvc:BookstoreService) {}

  ngOnInit() {
    this.masterBook = this.bookSvc.getDataSearch();
    this.selectActiveMenu(this.title);

  }

  selectActiveMenu(opened){
    this.removeActiveMenu();
    if(opened == 'catalog'){
      $('#listMenu #titleCatalog').addClass('customColorNav');
    }else if(opened == 'home'){
      $('#listMenu #titleHome').addClass('customColorNav');
    }else if(opened == 'shoplist'){
      $('#listMenu #titleShoplist').addClass('customColorNav');
    }
  }


  removeActiveMenu(){
    $('#listMenu #titleHome').removeClass('customColorNav');
    $('#listMenu #titleCatalog').removeClass('customColorNav');
    $('#listMenu #titleShoplist').removeClass('customColorNav');
  }


  sliderImg:any = [
    {
      image: "https://getuikit.com/docs/images/photo.jpg",
      name: "gambar 1",
      idx: 1
    },
    {
      image: "https://getuikit.com/docs/images/dark.jpg",
      name: "gambar 2",
      idx: 2
    },
    {
      image: "https://getuikit.com/docs/images/light.jpg",
      name: "gambar 3",
      idx: 3
    },
    {
      image: "https://getuikit.com/docs/images/photo2.jpg",
      name: "gambar 4",
      idx: 4
    },
    {
      image: "https://getuikit.com/docs/images/photo3.jpg",
      name: "gambar 5",
      idx: 5
    }
  ]

}
