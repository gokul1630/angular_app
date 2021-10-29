import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor () {}
  name = 'Gokul'
  desgination = 'Engineer'
  imageLink='https://cdn.pling.com/cache/280x171/img/4/b/3/0/cb78569f8e93130126f77a452fb3014ca330.png'
  ngOnInit(): void {
  }

}
