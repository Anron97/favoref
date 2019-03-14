import { Component, OnInit } from '@angular/core';
import {Resource} from '../../models/Resource';

@Component({
  selector: 'app-home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss',]
})
export class HomeComponent implements OnInit {

  resources: Resource[] = [new Resource('Header', '/assets/images/user.jpg', 'http://google.com', false)];

  constructor() {
  }

  ngOnInit() {
  }

}
