import { Component, OnInit } from '@angular/core';
import { BookstoreService } from '../../service/bookstore.service'
import * as $ from 'jquery'
import * as _ from "lodash";
declare var UIkit: any;
import { Router } from '@angular/router';


@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],

})
export class CatalogComponent implements OnInit {
  masterBook: any =[];
  dataCart:any = [];

  title = "catalog";

  constructor(
    private bookSvc: BookstoreService,
    public router  : Router,
    ) {}

  ngOnInit() {
    this.dataCart = this.bookSvc.getDataCart();
    if(this.dataCart.length == 0){
      this.masterBook = this.bookSvc.generateListBook();
    }else{
      this.masterBook = this.bookSvc.getDataMasterBook();
    }
    console.log('master book ===>',this.masterBook)
    this.selectActiveMenu(this.title);
    this.pagination(1);
    $('#pagination #nextBtn').addClass('customColor');
    
    
    
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


  currentPageItem = [];
  arrPagination:any = []
  pagination(page){
    this.arrPagination = [];
    this.currentPageItem = [];
    var itemInPage = 6;
    var arr = this.masterBook;
    this.arrPagination = arr.map( function(e,i){ 
        return i%itemInPage===0 ? arr.slice(i,i+itemInPage) : null; 
    }).filter(function(e){ return e; });
    console.log('pagination | this.arrPagination ===>',this.arrPagination)    
    this.currentPageItem = this.arrPagination[parseInt(page)-1]
    console.log('currentPageItem ===> o',this.currentPageItem)
  }


  addToCart(data){
    UIkit.notification.closeAll()
    UIkit.notification( data.title + " berhasil masuk keranjang", {status:'warning',timeout:600})
    console.log('addToCart | data ===>',data); 
    data.qty = 1
    this.dataCart.push(data);
    this.bookSvc.sendDataCart(this.dataCart);
    this.checkDisableButton(data);
    console.log('dataCart ===>',this.dataCart);
  }

  checkDisableButton(data){
    for(var j in this.masterBook){
      if(data.id == this.masterBook[j].id){
        this.masterBook[j].isDisable = true;
        this.masterBook[j].stock -= 1
      }
    }
    this.bookSvc.updateMasterBook(this.masterBook);
  }

  filterText = "";
  Search() {
    if (this.filterText != "") {
      this.currentPageItem = this.masterBook.filter(res => {
        return res.title.toLocaleLowerCase().match(this.filterText.toLocaleLowerCase());
      })
    } else if (this.filterText == "") {
      this.ngOnInit();
    }

  }


  detailBook:any = {};
  modalDetailItem(data,index){
    console.log('modalDetailItem | index ===>',index);
    console.log('modalDetailItem | data  ===>',data);

    this.detailBook = this.currentPageItem[index]

    // UIkit.modal('#detailView').show();
    this.router.navigate(['/detail'], {skipLocationChange:true,queryParams : {detail:JSON.stringify(data)}});


  }

  


  currentPage = 1;
  prevPage(){
    if(this.currentPage == 1) this.currentPage = 1
    else this.currentPage -= 1
    console.log('prev page | currentPage ===>',this.currentPage);
    this.pagination(this.currentPage);
    if(this.currentPage == 1){
      $('#pagination #prevBtn').removeClass('customColor');
      $('#pagination #nextBtn').addClass('customColor');
    }else{
      $('#pagination #prevBtn').addClass('customColor');
      $('#pagination #nextBtn').addClass('customColor');

    }
  }


  
  nextPage(){
    if(this.currentPage == this.arrPagination.length) this.currentPage = this.arrPagination.length
    else this.currentPage += 1
    console.log('next page | currentPage ===>',this.currentPage)
    this.pagination(this.currentPage);

    if(this.currentPage == this.arrPagination.length){
      $('#pagination #nextBtn').removeClass('customColor');
      $('#pagination #prevBtn').addClass('customColor');
    }else{
      $('#pagination #nextBtn').addClass('customColor');
      $('#pagination #prevBtn').addClass('customColor');

    }
  }

// TEST

}
