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

}
