import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validator } from '@angular/forms';
import { SafeUrl, SafeHtml, DomSanitizer } from '@angular/platform-browser';
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

  user = {userId:"", userName:"", password:""};

  trustURL: SafeUrl;
  trustHTML: SafeHtml;

  constructor(private memberService: MemberService, private _sanitizer: DomSanitizer) 
  {
    this.trustURL = this._sanitizer.bypassSecurityTrustUrl("javascript:alert('hello')");
    this.trustHTML = this._sanitizer.bypassSecurityTrustHtml("<b>test</b>");
  }

  transToTrustURL (url:string)
  {
    return this._sanitizer.bypassSecurityTrustUrl(url);
  }

  ngOnInit() 
  {
    this.memberService.getMembers().then (members => {
      this.members = members;
    });
  }

  form = new FormGroup({

  });

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
