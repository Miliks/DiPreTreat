import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dipretreat-menu',
  templateUrl: './dipretreat-menu.component.html',
  styleUrls: ['./dipretreat-menu.component.scss']
})
export class DipretreatMenuComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  logout() {
    this.router.navigate(['/Login']);
  }

  gotoInsertData() {
    this.router.navigate(['/WmsInsert']);
  }
  gotoVerifyAmpunt() {
    this.router.navigate(['/WmsGet']);
  }

}
