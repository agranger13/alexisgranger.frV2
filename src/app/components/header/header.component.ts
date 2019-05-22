import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  @Output() card : EventEmitter<any> = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  onClick(nameCard){
    this.card.emit(nameCard)
  }

}
