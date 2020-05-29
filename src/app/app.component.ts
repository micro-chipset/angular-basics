import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  arr = [1, 1, 2, 3, 5, 8, 13]

  objs = [
    {title: 'Post 1', author: 'Ivan', comments: [
        {name: 'Max', text: 'Lorem 1'},
        {name: 'Max', text: 'Lorem 2'},
        {name: 'Max', text: 'Lorem 3'},
      ]},
    {title: 'Post 2', author: 'Ivan', comments: [
        {name: 'Max', text: 'Lorem 1'},
        {name: 'Max', text: 'Lorem 2'},
        {name: 'Max', text: 'Lorem 3'},
      ]}
  ]
}
