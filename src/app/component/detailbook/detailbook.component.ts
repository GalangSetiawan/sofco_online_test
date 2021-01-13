import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BookstoreService } from '../../service/bookstore.service'
declare var UIkit: any;

@Component({
  selector: 'app-detailbook',
  templateUrl: './detailbook.component.html',
  styleUrls: ['./detailbook.component.css']
})
export class DetailbookComponent implements OnInit {
  detailBuku:any = {}
  masterBook: any[];
  dataCart:any = [];

  constructor(
    private activateRoute: ActivatedRoute,
    private bookSvc      : BookstoreService,

  ) { }

  ngOnInit() {

    this.activateRoute.queryParams.subscribe(
      params => {
        this.detailBuku = JSON.parse(params['detail'])
        console.log('detailBuku ====>',this.detailBuku);
      }
    )

    this.dataCart = this.bookSvc.getDataCart();
    if(this.dataCart.length == 0){
      this.masterBook = this.bookSvc.generateListBook();
    }else{
      this.masterBook = this.bookSvc.getDataMasterBook();
    }


  }

  addToCart(data){
    UIkit.notification.closeAll()
    UIkit.notification( data.title + " berhasil masuk keranjang", {status:'warning',timeout:600})
    console.log('addToCart | data ===>',data); 
    data.qty = 1
    data.isDisable = true;
    data.stock -= 1;
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


}
