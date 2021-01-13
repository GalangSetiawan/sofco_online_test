import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookstoreService {

  constructor() { }


  dataCart:any = []
  getDataCart(){
    // console.log('Service | getDataCart ====>',this.dataCart)
    return this.dataCart;
  }

  sendDataCart(data){
    // console.log('Service | sendDataCart ====>',data)
    this.dataCart = data;
    return this.dataCart;
  }


  dataSearch:any = [];
  sendDataSearch(data){
    this.dataSearch = data
    return data
  }

  getDataSearch(){
    return this.dataSearch;
  }


  masterBook:any =[];
  getDataMasterBook(){
    return this.masterBook;
  }

  updateMasterBook(data){
    this.masterBook = data;
    return this.masterBook;
  }

  dataMaster:any = []
  generateListBook(){
    this.dataMaster = [
      {
        "id"         : 0,
        "title"      : "Orang Maiyah",
        "author"     : "Emha Ainun Nadjib",
        "description": "Tahun 2007 Penerbit Progres menerbitkan buku setebal 196 ini. Tahun 2015 Penerbit Bentang kemudian menerbitkan ulang. Sesuai judul, subjek utama pembahasan buku ini adalah Orang Maiyah. Cak Nun menulis, “Orang Maiyah adalah orang yang membaca dirinya berulang-ulang, ribuan kali. Di dalam Maiyah tak ada guru dan murid. Semua orang adalah murid, sang penghendak ilmu. Hidup orang Maiyah tidak tergantung kekayaan dan atau kemiskinan, tetapi tergantung pada proses pembelajaran menggunakan akal dan nuraninya untuk menyutradarai hidup menuju yang pantas dituju.”",
        "price"      : 14.748454,
        "star"       : 3,
        "stock"      : 10,
        "picture"    : "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1447027327l/27738068.jpg"
      },
      {
        "id"         : 1,
        "title"      : "Indonesia Bagian Dari Desa Saya",
        "author"     : "Emha Ainun Nadjib",
        "description": "Ternyata sejak tahun 1970-an Emha Ainun Nadjib sudah memiliki pemikiran yang jauh ke depan mengenai bangsa kita. Emha sangat bersedih bahwa “zaman edan” tiga dekade lalu sudah membuat kepala pusing, tetapi sekarang ini ”zaman edan” malah membuat kepala kita pecah! Keprihatinan dan konsistensi pemikiran Emha terhadap masalah sosial budaya bangsa ini membuat kita lebih sensitif. Lebih peduli pada persoalan mendasar yang dihadapi masyarakat sehari-hari. Pemikiran reflektif Emha seolah mendialogkan kembali pemikiran masa lalu dengan realitas sekarang, bahkan di masa mendatang.",
        "price"      : 58.261178,
        "star"       : 3,
        "stock"      : 10,
        "picture"    : "https://mojokstore.com/wp-content/uploads/2020/12/Indonesia-Bagian-dari-Desa-Saya.jpg"
      },
      {
        "id"         : 2,
        "title"      : "Jejak Tinju Pak Kyai",
        "author"     : "Emha Ainun Nadjib",
        "description": "Andaikanpun di seluruh Indonesia tak ada lagi koruptor di segala level dan lini, tak ada kejahatan, keserakahan, maksiat atau segala macam nilai kacau lainnya: tidak serta merta lantas bangsa kita akan menjadi selamat atau apalagi pasti mengalami kemajuan. Baik buruk jahat tak jahat bukan satu-satunya faktor penentu nasib manusia. Dimensi dasar nilai hidup manusia adalah baik dan buruk, benar dan salah, indah dan tidak indah. Sebenarnya belum cukup. Masih ada dimensi mendasar lainnya, belum variabel-variabel dan detailnya.",
        "price"      : 28.602393,
        "star"       : 3,
        "stock"      : 10,
        "picture"    : "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1470468442l/4652364._SY475_.jpg"
      },
      {
        "id"         : 3,
        "title"      : "Arus Bawah",
        "author"     : "Emha Ainun Nadjib",
        "description": "Buku ini pertama kali terbit tahun 1994 dengan judul Gerakan Punawakan Atawa Arus Bawah. Penerbit Bentang Pustaka akhirnya menerbitkan ulang tahun 2015. Cak Nun memainkan tokoh punakawan di sini sebagai simbol rakyat yang kerap kali berbincang dan membahas persoalan sehari-hari. Sekalipun begitu, punakawan di tangan Cak Nun ini seperti memberikan nasihat atau komentar sosial-kemasyarakatan yang kala itu relevan diperbincangkan. Buku ini sesungguhnya lahir ketika konteks politik Orde Baru berada di ujung tanduk. Cak Nun menulis, “Setiap kekuasaan itu cenderung menumpas dirinya sendiri. Rakyat itu sendiri tak bergantung kepada kekuasaan. Hanya kekuasaan yang sangat bergantung kepada rakyat. Seperti kesementaraan bergantung kepada keabadian.”",
        "price"      : 17.549837,
        "star"       : 3,
        "stock"      : 10,
        "picture"    : "https://cf.shopee.co.id/file/8b20387749b1f06b4e81a57dbf4ec52e"
      },
      {
        "id"         : 4,
        "title"      : "Markesot Bertutur Lagi",
        "author"     : "Emha Ainun Nadjib",
        "description": "Buku ini merupakan kelanjutan dari Markesot Bertutur. Pertama kali diterbitkan Ikapi, Jakarta, tahun 1994. Pada tahun itu Kompas menulis, “Buku ini (Markesot Bertutur Lagi) mampu mengharu-biru perasaan pembacanya dengan humor, keseriusan, sikap kritis, kepolosan, kesedihan, dan kekaguman.” Cak Nun masih konsisten mengambil karakter Markesot sebagai individu yang menjelaskan realitas sosial dalam konteks apa pun. Pada bagian kedua Markesot, pembaca akan disuguhkan hakikat kehidupan tapi, sebagaimana laiknya gaya kepenulisan Cak Nun, tak kering humor.",
        "price"      : 75.033285,
        "star"       : 3,
        "stock"      : 10,
        "picture"    : "https://www.bukukita.com/babacms/displaybuku/85778_f.jpg"
      },
      {
        "id"         : 5,
        "title"      : "Spiritual Journey",
        "author"     : "Emha Ainun Nadjib",
        "description": "Manusia mencapai taraf kesempurnaan dan keparipurnaan manakala perkembangan intelektual dan spiritualnya telah mengantarkannya pada pencapaian harmoni pada kehidupan dan alam semesta. Pencapaian harmoni ini hanya bisa terealisasi jika melampaui taraf-taraf paradoks fenomena alam dan kehidupan. Boleh jadi, akan tiba suatu masa di mana proses evolusi fisik telah mencapai titik kulminasi. Saat evolusi spiritual melakukan seleksi alami bahwa yang mampu bertahan hidup hanyalah mereka yang matang secara intelektual dan spiritual.",
        "price"      : 80.35224,
        "star"       : 3,
        "stock"      : 10,
        "picture"    : "https://1.bp.blogspot.com/-I896zPtiM04/VUSEuOIOJlI/AAAAAAAAf2g/-NDtfqj5-2k/s1600/Spiritual%2BJourney.jpg"
      },
      {
        "id"         : 6,
        "title"      : "Sedang Tuhanpun Cemburu",
        "author"     : "Emha Ainun Nadjib",
        "description": "Buku ini telah mengalami cetak ulang lebih dari lima kali. Kumpulan tulisan yang dibukukan tersebut pertama diterbitkan tahun 1994 oleh SiPress. Tahun 2018 dicetak ulang oleh Bentang Pustaka. Banyak tulisan di buku ini berangkat dari pertanyaan-pertanyaan kontekstual yang dihadapi Cak Nun pada usia 20 sampai 30-an, sebuah angka yang kita tahu menandakan masih sangat muda. Tuhan sebagai subjek utama banyak disasar Cak Nun sebagai tema integral, namun ia juga mengembalikan konteks pembahasan pada manusia yang makin “disingkirkan” secara struktural. Cak Nun banyak menggunakan pendekatan sosio-kultural sebagai metode penguraian tekstual dalam bukunya ini.",
        "price"      : 58.757277,
        "star"       : 3,
        "stock"      : 10,
        "picture"    : "https://mojokstore.com/wp-content/uploads/2019/01/Sedang-Tuhan-Pun-Cemburu.jpg"
      },
      {
        "id"         : 7,
        "title"      : "Tuhan pun Berpuasa",
        "author"     : "Emha Ainun Nadjib",
        "description": "Buku ini diterbitkan pertama kali oleh Zaituna tahun 1997. Tahun 2016 dicetak ulang oleh Kompas. Cak Nun menulis, “Allah begitu sabar terhadap manusia, cinta dan romantisme-Nya tidak berdasarkan kekuasaan belaka. Allah pun mempunyai rasa ‘memiliki’ terhadap manusia. Dengan setia Allah tetap menerbitkan matahari tanpa peduli apakah manusia mensyukuri atau tidak. Allah tetap memancarkan cahaya matahari tanpa memperhitungkan berbagai pengkhianatan manusia terhadap-Nya. Allah ‘berpuasa’ menahan diri dari murka-Nya terhadap manusia. Puasa adalah ‘milik khusus’ di haribaan-Nya. Sampai-sampai Ia mengorbankan diri-Nya seakan-akan Ia butuh sesuatu dari ibadah manusia, padahal puasa merupakan proses dasar pembebasan dan penyelamatan manusia atas dirinya sendiri. Cak Nun dengan sangat jernih memandang semua ‘puasa’ dari berbagai sisi yang mampu menjernihkan batin dan mencerahkan pikiran kita”.",
        "price"      : 55.360955,
        "star"       : 3,
        "stock"      : 10,
        "picture"    : "https://3.bp.blogspot.com/-bl73tcQexWQ/V0znVjIqESI/AAAAAAAAAXA/VNPcM-eg1OkkT1TTU4HxUVyr5JaQ5X5wACKgB/s1600/16245623.jpg"
      },
      {
        "id"         : 8,
        "title"      : "Gelandangan diKampung Sendiri",
        "author"     : "Emha Ainun Nadjib",
        "description": "Buku ini pertama kali diterbitkan Pustaka Pelajar tahun 1995. Karena begitu relevannya pembahasan Cak Nun, maka buku ini telah dicetak ulang. Terakhir Bentang Pustaka yang menerbitkannya. Kumpulan tulisan yang diantologikan tersebut banyak mengulas relasi antara rakyat dan pejabat yang acap kali salah sangka. Pandangan terhadap rakyat yang menjadi bawahan pejabat “digugat” Cak Nun. Ia menawarkan upaya dekonstruktif terhadap posisi hierarkis itu. Lebih lanjut, Cak Nun menulis, “Inilah tatanan dunia yang dibolak-balik. Bukankah hak atas segala aturan berada di tangan rakyat? Kalau rakyat tidak setuju, itu berarti bos tidak setuju. Hamba sahaya harus punya telinga selebar mungkin untuk mendengarkan apa kata juragannya. Maka menjadi aneh jika rakyat terus menerus diwajibkan berpartisipasi dalam pembangunan.”",
        "price"      : 39.239698,
        "star"       : 3,
        "stock"      : 10,
        "picture"    : "https://www.bukukita.com/babacms/displaybuku/83962_f.jpg"
      },
      {
        "id"         : 9,
        "title"      : "Secangkir Kopi Jon Parkir",
        "author"     : "Emha Ainun Nadjib",
        "description": "Ini kopi bukan sembarang kopi. Ini kopi bikinan koki bernama Jon Pakir alias “Jon yang Faqir” — seorang pakar kondang asal Jombang yang piawai dalam meracik gagasan dan merakit kata-kata. Kali ini, si Jon ingin menghibur pembaca sekaligus menyajikan secangkir kopi yang mat-matan untuk dinikmati kapan dan di mana saja. Ada kopi “Modal untuk Pelit”, kopi “Amenangi Zaman Jahiliah”, kopi “Jurnalisme Absolut”, kopi “Syahadat Kiai Jangkung”, kopi “Sosiologi Munyuk”, kopi “Fastabiqul Fulus”, dan kopi-kopi lain yang ditanggung lebih sip ketimbang kopi nasgithel (panas, legi, lan kenthel).",
        "price"      : 98000,
        "star"       : 3,
        "stock"      : 10,
        "picture"    : "https://www.mizan.com/wp-content/uploads/2019/08/secangkir-kopi-jon-pakir-republish-3.jpg"
      },
      {
        "id"         : 10,
        "title"      : "Bola Bola Kultural",
        "author"     : "Emha Ainun Nadjib",
        "description": "Tak jamak orang tahu sekitar tahun 90 awal Cak Nun menulis kolom olahraga. Buah penanya melampaui segi teknis sebagaimana ditulis kebanyakan kolumis saat itu karena di satu sisi pesan-pesan filosofis dan kultural terejawantah jelas. Ini yang membedakan genre tulisan konvensional lain. Pendekatan ini menjadi menarik bagi pembaca, terutama penggandrung cabang olahraga sepak bola, tinju, dan silat karena sudut pandang yang diteroka relatif unik.",
        "price"      : 98000,
        "star"       : 3,
        "stock"      : 10,
        "picture"    : "https://cdn.caknun.com/media/2018/04/20180405-asepi-bola-kultural-1.jpg"
      },
      {
        "id"         : 11,
        "title"      : "Demokrasi Tolol Versi Saridin",
        "author"     : "Emha Ainun Nadjib",
        "description": "Saridin bukan tidak sadar dan bukan tanpa perhitungan kenapa dia memilih nyantri ke pondoknya Sunan Kudus. Saridin itu tipe seorang murid yang cerdas dan mengerti apa yang dilakukannya. Harap dimengerti murid itu bukan padanan kata dari siswa atau student, sebagaimana manusia zaman modern memaknainya secara tolol. Memang manusia dalam kebudayaan dan peradaban modern kerjanya selalu melawak. Mereka lucu, dan bahkan sangat lucu karena mereka sendiri tidak sadar bahwa mereka lucu. Coba lihat saja. Di dunia modern ada yang namanya universitas . Wah gagahnya bukan main lembaga pendidikan tertinggi ini. Penuh gengsi dan keangkuhan. Kalau sudah lulus darinya, orang di sebut “sarjana”. Padahal sesungguhnya Saridin membuktikan sendiri bahwa para pelaku lembaga pendidikan dunia modern ini ndagel atawa melawak. Mereka pura-pura bikin universitas adalah manusia universal. Padahal nanti para sarjana keluaran universitas itu kualitas dan cakrawala pandangnya tak lebih dari manusia fakultif.        ",
        "price"      : 98000,
        "star"       : 3,
        "stock"      : 10,
        "picture"    : "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1296563033l/2578284.jpg"
      },
      {
        "id"         : 12,
        "title"      : "Indonesia Apa Adanya",
        "author"     : "Emha Ainun Nadjib",
        "description": "Buku penuh ilustrasi visual berwarna ini berisi 120 kutipan Cak Nun. Sidang pembaca akan menikmati penggalan kalimat singkat, padat, dan penuh kearifan yang di satu sisi dapat menjadi “pengingat” sekaligus “refleksi” tentang hidup dan kehidupan. Cak Nun menulis, “Sekarang ini di Indonesia Siapa saja bisa menjabat apa saja, bisa dijadikan bukan apa-apa Bukan apa-apa bisa dijadikan apa-apa Perkara tidak diperkarakan Bukan perkara diperkarakan Salah dibenarkan, benar disalahkan Sangat sukar membayangkan bahwa kita akan selamat dari kehancuran.”        ",
        "price"      : 98000,
        "star"       : 3,
        "stock"      : 10,
        "picture"    : "https://cf.shopee.co.id/file/7a447135452ab72753420f60f27728f5"
      },
      {
        "id"         : 13,
        "title"      : "Cahaya Maha Cahaya: Kumpulan Sajak",
        "author"     : "Emha Ainun Nadjib",
        "description": "Melalui sajak-sajaknya Cak Nun mengungkapkan konflik batin seorang Muslim — sebagai manusia bisa, bukan tokoh di mimbar. Ia, tentu saja, mengangkat tema-tema keagamaan, keresahan manusia yang tak habis-habisnya mempertanyakan dan mencoba menegaskan kedudukan dan perannya di dunia dalam kaitannya dengan kepastian kuasa Tuhan yang tidak perlu dipertanyakan dan ditegas-tegaskan lagi.",
        "price"      : 98000,
        "star"       : 3,
        "stock"      : 10,
        "picture"    : "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1470460419l/6271877._SX318_.jpg"
      },
      {
        "id"         : 14,
        "title"      : "Seribu Masjid Satu Jumlahnya: Tahajjud Cinta Seorang Hamba",
        "author"     : "Emha Ainun Nadjib",
        "description": "Dalam buku gabungan antara kumpulan prosa dan puisi (proisi) ini, pembaca akan mendapati ungkapan cinta seorang manusia kepada sesamanya dan Penciptanya. Meskipun tetap dengan nada yang kadang menusuk tajam — karena sarat kritik atas kehidupan sosial kita yang pincang — kelima puluh proisi yang tampil di sini mencuatkan kepekaan dan kedalaman pemikiran seorang seniman dalam menangkap ayat-ayat Tuhan.",
        "price"      : 98000,
        "star"       : 3,
        "stock"      : 10,
        "picture"    : "https://inc.mizanstore.com/aassets/img/com_cart/produk/covUA-214.jpg"
      },
      {
        "id"         : 15,
        "title"      : "Slilit Sang Kiai",
        "author"     : "Emha Ainun Nadjib",
        "description": "Ide-ide dan sepak terjangnya sering bernada kritis dan mengejutkan. Minatnya luas, mencakup berbagai masalah hangat di bidang sosial, budaya, dan politik. Buku ini jelas memperlihatkan sosok penulisnya, Emha Ainun Nadjib, sebagai cendekiawan yang kritis sekaligus penyair yang kerap lebih suka menafikan aturan-aturan konvensional. Di dalamnya, Emha menuangkan segenap gagasan dan uneg-uneg-nya tentang “persoalan-persoalan darurat bagi bangsa yang berduka”.",
        "price"      : 98000,
        "star"       : 3,
        "stock"      : 10,
        "picture"    : "https://mojokstore.com/wp-content/uploads/2018/04/Slilit-Sang-Kiai.jpg"
      },
      {
        "id"         : 16,
        "title"      : "Doa Mohon Kutukan",
        "author"     : "Emha Ainun Nadjib",
        "description": "Buku ini terdiri atas tiga bagian, yaitu Doa Mohon Kutukan (20 puisi), Nasionalisme Burung-burung (13 puisi) dan Perjalanan Dusta (1 puisi). Cak Nun menulis, “Bukan hanya engkau: aku pun bertanya kepada diriku sendiri: Kenapa kau minta dikutuk oleh Tuhanmu? Bukankah Ia dalah sesembahan yang justru bersifat Maha Pemurah dan Pengampun? Betapa sombong engkau! Allah senantiasa menghamparkan rahmat dan rezekinya kepada siapa dan apa saja, bahkan pun kepada seekor cecak atau seorang maling: sedemikian angkuhkah hatimu sehingga justru mohon kutukan dari-Nya?”",
        "price"      : 98000,
        "star"       : 3,
        "stock"      : 10,
        "picture"    : "https://3.bp.blogspot.com/-v1IHsGAd2k8/VOtcav-MioI/AAAAAAAADe8/k5fyPH4zzRo/s1600/doa%2Bmohon%2Bkutukan.jpg"
      },
      {
        "id"         : 17,
        "title"      : "Kiai Sudrun Gugat",
        "author"     : "Emha Ainun Nadjib",
        "description": "Dalam kumpulan artikelnya ini, Cak Nun — dengan gaya dan watak kritisnya yang menggemaskan itu — berbicara tentang banyak hal. Ia bukan hanya fasih mengangkat soal keagamaan, seperti ihwal tauhid serta pengalaman nilai akidah dan syariah, tetapi juga menguasai pelbagai masalah kemasyarakatan. Tengok saja, misalnya, cara ia menanggapi dialog anggota Petisi 50 dengan Sudomo, kasuh Nipah dan Kedungombo, serta lain sebagainya.",
        "price"      : 98000,
        "star"       : 3,
        "stock"      : 10,
        "picture"    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6Q1zvd9wnsYB2o5LfVCvPCfgytzV3_RZ-7A&usqp=CAU"
      },
      {
        "id"         : 18,
        "title"      : "Yang Terhormat Nama Saya",
        "author"     : "Emha Ainun Nadjib",
        "description": "Semua cerpen yang ditulis Cak Nun di sini mengisahkan kegelisahan batin manusia yang tak terlepas dari kondisi sosial-ekonomi tahun 1977-1981. Cak Nun tak mendramatisasi tokoh dan penokohan yang dibangunnya. Ia menawarkan kisah sebagaimana adanya, tanpa tedeng aling-aling, bahkan pretensi mencapai tingkat sastrawi. Sidang pembaca akan disodorkan bagaimana individu menghadapi problem hidupnya dengan pasrah-sumarah, namun tetap memiliki daya juang yang arif dan bijaksana. Dalam penggalan cerpen berjudul Pesta, Cak Nun menulis, “Aku berusaha dengan sebijaksana mungkin melepaskan segala wujud hubungan dengan orang lain yang kira-kira bisa merupakan kesetiaanku padamu.”",
        "price"      : 98000,
        "star"       : 3,
        "stock"      : 10,
        "picture"    : "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1228270027l/5970406.jpg"
      },

      
    ]
    return this.dataMaster;
  }
  
}
