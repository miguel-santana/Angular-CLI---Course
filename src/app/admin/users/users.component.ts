import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users!: any[];
  hasPermission: boolean = true;
  constructor() { }

  ngOnInit(): void {
    if (this.hasPermission) {
      this.getUsers()
        .then(users => this.users = users)
        .catch(e => console.log(e.message));
    }
    else {
      this.users = [];
    }
  }

  async getUsers() {
    return [
      { name: "John", email: "john@angular.com" },
      { name: "colleen", email: "colleen@angular.com" }
    ]

  }

}
