import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-works',
  templateUrl: './my-works.component.html',
  styleUrls: ['./my-works.component.sass']
})
export class MyWorksComponent implements OnInit {
  categorie = [
    {
      name : "LOGO",
      image : "../../../assets/logo/traveler_logo.jpg"
    },
    {
      name : "BANNIERE",
      image : "../../../assets/banner/skyspeur.jpg"
    },
    {
      name : "PEINTURE",
      image : "../../../assets/num/spimouth.jpg"
    },
    {
      name : "INTRO",
      image : "../../../assets/intro/1_Moment.jpg"
    },
    {
      name : "COMPOSITION",
      image : "../../../assets/comp/kaneki.jpg"
    },
    {
      name : "DESSIN",
      image : "../../../assets/dessin/1.jpg"
    },
  ]
  constructor() { }

  ngOnInit() {
    for(let cat of this.categorie){
      let elem = <HTMLElement> document.getElementById(cat.name);
      console.log(elem.style.backgroundImage)
      elem.style.backgroundImage = `url('${cat.image}')`;
    }

  }
  seeMore(title){

  }
}
