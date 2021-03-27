import { Component, Input, OnInit } from '@angular/core';
//import { Character } from './../../interfaces/character.interface';
@Component({
  selector: 'app-badge',
  template: `<div class="badge" [ngStyle]="getRandomColor()">{{ status }}</div>`,
  //template: `<div class="badge">{{ status }}</div>`,
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent implements OnInit {

  randomColor = '#FFFFFF';
  @Input() status;
  constructor() { }

  ngOnInit(): void {
  }

  getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    const styles = {
      'background-color': color
    };
    return styles;
  }
}
