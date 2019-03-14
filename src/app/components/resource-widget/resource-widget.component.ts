import {Component, Input, OnInit} from '@angular/core';
import {Resource} from '../../models/Resource';
import {Router} from '@angular/router';

@Component({
  selector: 'app-resource-widget',
  templateUrl: './resource-widget.component.html',
  styleUrls: ['./resource-widget.component.scss']
})
export class ResourceWidgetComponent implements OnInit {

  @Input()
  resource: Resource;

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
