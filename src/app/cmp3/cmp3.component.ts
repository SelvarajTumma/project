import { HtmlParser } from '@angular/compiler';
import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS } from '@angular/material';
import { Button } from 'selenium-webdriver';


@Component({
  selector: 'app-cmp3',
  templateUrl: './cmp3.component.html',
  styleUrls: ['./cmp3.component.css']
})
export class Cmp3Component implements OnInit {
  n:number=20;
  array:any[]=[]; 
  change1(n1:any){
    this.array[n1.id-1].val=2;
  } 
  constructor() { }
  ngOnInit() {
    for(let i=0;i<this.n;i++){
      let c={
        id:i+1,
        val:1
      }
      this.array.push(c);
    }  
  } 
}
