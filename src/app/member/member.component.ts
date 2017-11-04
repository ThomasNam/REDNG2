import { Component, OnInit } from '@angular/core';

import { MemberService, Member } from './member.service'

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css'],
})
export class MemberComponent implements OnInit {

  members:Member[];

  age: number;
  
  name: string;

  active: boolean = true;

  msg: string = "행복한 하루 되세요"

  constructor(private memberService: MemberService) { }

  ngOnInit() 
  {
    this.memberService.getMembers().then (members => {
      this.members = members;
    });

  }

  setAge(name: string)
  {
    this.name = name;
    this.memberService.getMember(name).then(member => {
      this.age = member.age;
    });
  }

  get myClass()
  {
      return this.active ? "button" : "";
  }

  toggleBtn()
  {
    this.active = !this.active;
  }

  onSave(data)
  {
    alert ("데이터 : " + data);

    console.log (data);
  }

  modifyMsg()
  {
    this.msg = "아흑";
  }

  onComplete(val)
  {
    console.log ("완료 : " + val);
  }
}
