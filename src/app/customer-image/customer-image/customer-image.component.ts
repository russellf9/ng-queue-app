import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'customer-image',
  templateUrl: './customer-image.component.html'
})
export class CustomerImageComponent implements OnInit {

  path:string = '/assets/images/avatar/';
  imageName:string;
  imagePath:string = '';

  people:Array<string> = [
    'ade.jpg',
    'chris.jpg',
    'elliot.jpg',
    'elyse.jpg',
    'elyse.png',
    'eve.png',
    'jenny.jpg',
    'joe.jpg',
    'justen.jpg',
    'kristy.jpg',
    'lena.png',
    'lindsay.png',
    'matthew.jpg',
    'molly.jpg',
    'nan.jpg',
    'patrick.png',
    'rachel.png',
    'steve.jpg',
    'stevie.jpg',
    'veronika.jpg',
    'zoe.jpg'
  ];


  constructor() {}

  evaluateImage() {
    let index = this.getRandomIntInclusive(0, this.people.length -1);
    this.imagePath = this.path + this.people[index];
    const REGEXP = /([^\/]+)(?=\.\w+$)/;
    let matches:Array<string> = this.imagePath.match(REGEXP);
    this.imageName = matches[0];
  }


  //noinspection JSMethodCanBeStatic
  getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  ngOnInit() {
    this.evaluateImage()
  }
}
