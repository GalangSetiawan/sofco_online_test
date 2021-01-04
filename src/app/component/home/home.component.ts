import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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
