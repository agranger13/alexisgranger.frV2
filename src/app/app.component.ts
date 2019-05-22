import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'alexisgrangerV2';
  card;

  redirect(event){
    this.card = event;
  }
}
