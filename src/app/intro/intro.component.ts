import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  constructor(public _router:Router) { }

  title = "반갑습니다! Core Module!!"

  ngOnInit() {
  }

  moveMember ()
  {
    this._router.navigateByUrl("/member/list");
  }

  moveMember2 ()
  {
    this._router.navigate(['member', 'list']);
  }
}
