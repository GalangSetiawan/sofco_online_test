import { Component, OnInit } from '@angular/core';
import { BookstoreService } from '../../service/bookstore.service';
import { Router } from '@angular/router';

import * as _ from "lodash";
import * as $ from 'jquery'
declare var UIkit: any;
import Swal from 'sweetalert2/dist/sweetalert2.js';


@Component({
  selector: 'app-shoplist',
  templateUrl: './shoplist.component.html',
  styleUrls: ['./shoplist.component.css'],
})
export class ShoplistComponent implements OnInit {
  title = "shoplist";
  dataCart:any = [];
  masterBook: any[];
  constructor(
    private bookSvc:BookstoreService,
    public router: Router,

    ) {
  }
  ngOnInit() {
    this.dataCart = this.bookSvc.getDataCart();
    this.masterBook = this.bookSvc.getDataMasterBook();    
    console.log('dataCart | shoplist===>',this.dataCart);
    this.calculate();
    this.selectActiveMenu(this.title);

    if(this.dataCart.length == 0 ){
      Swal.fire(
        "Upps Keranjangmu Kosong",
        "Silahkan pilih buku dulu dimenu katalog ya kak",
        'warning'
      )
      this.router.navigate(['catalog'], {skipLocationChange: true});

    }

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


  totalBuku = 0;
  totalHarga= 0;
  calculate(){
    this.totalBuku = 0;
    this.totalHarga= 0;
    for(var i in this.dataCart){
      if(this.dataCart[i].qty == 0){
        this.hapusBuku(this.dataCart[i]);
      }else{
        this.totalBuku += this.dataCart[i].qty;
        this.totalHarga += (this.dataCart[i].price * this.dataCart[i].qty);
      }

    }
  }

  hapusBuku(data){

    Swal.fire({
      title: "Hapus Buku?",
      text: "Apakah anda yakin ingin menghapus buku ini dari keranjang?",
      type: 'warning',
      showConfirmButton: true,
      showCancelButton: true     
    })
    .then((willDelete) => {

      if(willDelete.value){
        Swal.fire(
          'Berhasil', 
          'buku berhasil dihapus', 
          'success'
        )   
        var tmpData = data;
        this.dataCart = _.remove(this.dataCart, function(n){
          return n.id != tmpData.id
        })
        for(var i in this.masterBook){
          if(this.masterBook[i].id == tmpData.id){
            this.masterBook[i].stock = 10;
            this.masterBook[i].isDisable = false;
          }
        }
        this.bookSvc.sendDataCart(this.dataCart);
        this.bookSvc.updateMasterBook(this.masterBook);
        this.calculate();
      }else{
        Swal.fire("buku tidak terhapus");
        
      }

      console.log(willDelete)
    });


    
  }


  qty = ""
  editQty(buku,method){

    if(buku.qty == 0 && method == 'kurang'){
      this.hapusBuku(buku);
    }else{
      for(var i in this.dataCart){
        if(this.dataCart[i].id == buku.id){
          if(method == 'tambah'){
            if(buku.qty == 10){
              UIkit.notification.closeAll()
              UIkit.notification("hanya tersedia 10 buku untuk judul ini", {status:'danger',timeout:1000})
            }else this.dataCart[i].qty += 1;
          }
          else if(method == 'kurang')this.dataCart[i].qty -= 1;
        }
      }
    }
    
    for(var i in this.masterBook){
      if(this.masterBook[i].id == buku.id){
        if(method == 'tambah'){
          if(this.masterBook[i].stock > 0)this.masterBook[i].stock -= 1
        }else if(method == 'kurang'){
          if(this.masterBook[i].stock < 10)this.masterBook[i].stock += 1
        }
      }
    }

    console.log('this.dataCart[i].qty ====>',this.dataCart )
    this.bookSvc.sendDataCart(this.dataCart);
    this.bookSvc.updateMasterBook(this.masterBook);
    this.calculate();
  }
  

  lanjutkan(){

    Swal.fire({
      title: "Whoops Unexpected Feature",
      text: "Maaf ya kak fiturnya ga sampe sini, lanjut lain waktu yaa ",
      type: 'warning',
      showConfirmButton: true,
      showCancelButton: true     
    })
    .then((willFinish) => {

      if(willFinish.value){
        Swal.fire(
          'Yeay', 
          'Aplikasinya selesai, see you next time', 
          'success'
        )   
      }else{
        Swal.fire(
          'Yeay', 
          'Aplikasinya selesai, see you next time', 
          'success'
        )   
      }
    })
    
  }

}
