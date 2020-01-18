import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnChanges{
  @Input() users: User[];
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
  }
}
