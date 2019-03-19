import {Component, Input, OnInit} from '@angular/core';
import {Resource} from '../../models/Resource';
import {Router} from '@angular/router';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.scss']
})
export class ResourceComponent implements OnInit {

  @Input()
  resource: Resource;

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
