import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  constructor() {}
  doarAlimentos() {
    this.abirUrl('https://www.google.com/maps/search/Ponto+Doacao+Alimento');
  }
  doarRoupas() {
    this.abirUrl('https://www.google.com/maps/search/Doacao+Roupa/');
  }
  doarSangue() {
    this.abirUrl('https://www.google.com/maps/search/Doacao+Sangue');
  }

  abirUrl(url: String) {
    window.open(url, '_blank').focus;
  }
}
