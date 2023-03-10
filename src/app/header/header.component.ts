import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  setLinkStyle(id: string){
    document.querySelectorAll('a').forEach((el) => {
      el.classList.remove('active');
    });
    document.getElementById(id)?.classList.add('active')
  }

}
